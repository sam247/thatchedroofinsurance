import { deepseek } from '@ai-sdk/deepseek';
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

async function sendSalesLeadEmail(userMessage: string, conversation: any[], quoteInterest: boolean) {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY not configured');
    return;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  // Extract conversation for context
  const conversationText = conversation
    .map(msg => `${msg.role}: ${msg.content}`)
    .join('\n\n');

  const leadType = quoteInterest ? 'Quote Interest' : 'General Inquiry';

  try {
    await resend.emails.send({
      from: 'Thatched Roof Insurance <noreply@thatchedroofinsurance.co.uk>',
      to: 'sampettiford@googlemail.com',
      subject: `Sales Lead: ${leadType} - Thatched Roof Insurance Chat`,
      html: `
        <h2>New Sales Lead from Website Chat</h2>
        <p><strong>Lead Type:</strong> ${leadType}</p>
        <p><strong>Latest Message:</strong></p>
        <p>${userMessage}</p>
        <hr>
        <h3>Full Conversation:</h3>
        <pre style="white-space: pre-wrap; background: #f5f5f5; padding: 15px; border-radius: 5px;">${conversationText}</pre>
        <hr>
        <p><strong>Action Required:</strong> ${quoteInterest ? 'User expressed interest in getting a quote. Follow up to encourage quote form completion.' : 'User asked questions. Consider following up with quote form link.'}</p>
        <p><small>Timestamp: ${new Date().toISOString()}</small></p>
      `,
    });
  } catch (error) {
    console.error('Email send error:', error);
  }
}

export async function POST(req: Request) {
  try {
    const { messages, isQuoteInterest } = await req.json();
    
    if (!process.env.DEEPSEEK_API_KEY) {
      return new Response('DeepSeek API key not configured', { status: 500 });
    }
    
    const siteContext = await getSiteContext();
    
    const systemPrompt = `You are a sales-focused assistant for Thatched Roof Insurance, a specialist UK insurance provider for thatched properties.

Your primary goal is to guide users to complete the quote form at /quote. This is the main conversion goal.

Your role:
- Answer questions about thatched roof insurance, regulations, costs, and coverage professionally
- Provide accurate information from the website content
- When users ask about quotes, pricing, or coverage, ALWAYS direct them to fill out the quote form at /quote
- Emphasize the benefits of getting a personalized quote (accurate pricing, tailored coverage, expert review)
- Be helpful and informative, but always steer conversations toward the quote form when appropriate
- If users have questions, answer them briefly, then suggest they get a personalized quote via the form
- Never collect contact details directly - always direct to the quote form instead

Website Context:
${siteContext}

Important:
- Your main objective is to convert users to fill out the quote form at /quote
- When users express interest in quotes, insurance, or pricing, immediately direct them to /quote
- Be friendly, professional, and helpful, but always bring the conversation back to the quote form
- Keep responses concise but informative
- Use phrases like "To get an accurate quote tailored to your property, please fill out our quote form" or "The best way to get a personalized quote is through our online form"
- Never ask for email/phone directly - always direct to the form`;

    const result = await streamText({
      model: deepseek('deepseek-chat'), // Using DeepSeek Chat model
      system: systemPrompt,
      messages: messages,
    });

    // If user expressed quote interest, send sales lead email
    if (isQuoteInterest) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage && lastMessage.role === 'user') {
        await sendSalesLeadEmail(lastMessage.content, messages, true);
      }
    }

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response('Error processing chat', { status: 500 });
  }
}

