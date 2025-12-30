import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { articles } from '@/data/articles';
import { Resend } from 'resend';

// Load site content for context
async function getSiteContext() {
  const llmTxt = await readFile(join(process.cwd(), 'public', 'llm.txt'), 'utf-8');
  
  // Extract article summaries for context
  const articleSummaries = articles
    .map(article => `- ${article.title}: ${article.excerpt}`)
    .join('\n');
  
  return `${llmTxt}\n\n## Available Blog Articles\n${articleSummaries}`;
}

async function sendLeadEmail(userMessage: string, conversation: any[]) {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY not configured');
    return;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  // Extract contact info from conversation
  const conversationText = conversation
    .map(msg => `${msg.role}: ${msg.content}`)
    .join('\n\n');

  try {
    await resend.emails.send({
      from: 'Thatched Roof Insurance <noreply@thatchedroofinsurance.co.uk>',
      to: 'sampettiford@googlemail.com',
      subject: 'New Lead from Chat - Thatched Roof Insurance',
      html: `
        <h2>New Lead from Website Chat</h2>
        <p><strong>Latest Message:</strong></p>
        <p>${userMessage}</p>
        <hr>
        <h3>Full Conversation:</h3>
        <pre style="white-space: pre-wrap; background: #f5f5f5; padding: 15px; border-radius: 5px;">${conversationText}</pre>
        <hr>
        <p><small>Timestamp: ${new Date().toISOString()}</small></p>
      `,
    });
  } catch (error) {
    console.error('Email send error:', error);
  }
}

export async function POST(req: Request) {
  try {
    const { messages, isLeadCapture } = await req.json();
    
    if (!process.env.OPENAI_API_KEY) {
      return new Response('OpenAI API key not configured', { status: 500 });
    }
    
    const siteContext = await getSiteContext();
    
    const systemPrompt = `You are a helpful assistant for Thatched Roof Insurance, a specialist UK insurance provider for thatched properties.

Your role:
- Answer questions about thatched roof insurance, regulations, costs, and coverage
- Provide information from the website content
- Be professional, knowledgeable, and helpful
- If asked about quotes, encourage them to use the quote form at /quote or provide their contact details
- If they want to speak to someone, collect their name, email, and phone number
- Always be accurate and refer to the website content when possible

Website Context:
${siteContext}

Important:
- Always be accurate and refer to the website content
- For insurance quotes, direct users to /quote or collect their contact information
- If a user provides contact details, acknowledge it and let them know someone will contact them soon
- Be friendly but professional
- Keep responses concise but informative`;

    const result = await streamText({
      model: openai('gpt-4o-mini'), // Using gpt-4o-mini for cost efficiency
      system: systemPrompt,
      messages: messages,
    });

    // If this is a lead capture, send email
    if (isLeadCapture) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage && lastMessage.role === 'user') {
        // Extract lead info from conversation
        await sendLeadEmail(lastMessage.content, messages);
      }
    }

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response('Error processing chat', { status: 500 });
  }
}

