# Chat System Setup

This site uses Vercel AI SDK with DeepSeek to provide an AI-powered chat assistant trained on the site's content, focused on converting users to fill out the quote form.

## Features

- **AI-Powered Chat**: Uses DeepSeek Chat model to answer questions about thatched roof insurance
- **Site Content Training**: Trained on `public/llm.txt` and all blog articles
- **Sales Lead System**: Automatically detects quote interest and directs users to the quote form at `/quote`
- **Lead Notifications**: Emails sales leads to sampettiford@googlemail.com when users express interest in quotes
- **Professional UI**: Custom chat interface matching the site design

## Required Environment Variables

Add these to your `.env.local` file:

```env
DEEPSEEK_API_KEY=your_deepseek_api_key_here
RESEND_API_KEY=your_resend_api_key_here
```

### Getting API Keys

1. **DeepSeek API Key**:
   - Sign up at https://platform.deepseek.com
   - Go to API Keys section
   - Create a new API key
   - Add it to `.env.local` as `DEEPSEEK_API_KEY`

2. **Resend API Key** (for email notifications):
   - Sign up at https://resend.com
   - Get your API key from the dashboard
   - Add it to `.env.local` as `RESEND_API_KEY`
   - Verify your domain in Resend (or use their test domain for development)

## How It Works

1. **Chat Component** (`src/components/Chat.tsx`):
   - Floating chat button with custom icon (`/chat_icon.jpeg`)
   - Chat window with message history
   - Automatic quote interest detection
   - Direct links to quote form

2. **API Route** (`src/app/api/chat/route.ts`):
   - Loads site content from `llm.txt` and articles
   - Uses DeepSeek Chat model to generate responses
   - System prompt is optimized to direct users to the quote form
   - Sends sales lead emails via Resend when quote interest is detected

3. **Sales Lead Detection**:
   - Monitors user messages for quote-related keywords (quote, price, cost, premium, insurance, etc.)
   - Triggers email to sampettiford@googlemail.com with full conversation
   - Email includes conversation history and indicates quote interest
   - AI assistant always directs users to `/quote` form instead of collecting contact info directly

## Sales Focus

The chat system is designed to:
- Answer questions professionally and accurately
- Always direct users to the quote form when they express interest
- Never collect contact details directly - always push to the form
- Track quote interest for sales follow-up
- Convert conversations into quote form completions

## Customization

- **Chat Icon**: Located at `public/chat_icon.jpeg` (64x64px recommended)
- **System Prompt**: Edit the `systemPrompt` in `src/app/api/chat/route.ts` to adjust sales messaging
- **Email Template**: Modify the HTML template in `sendSalesLeadEmail` function
- **Quote Interest Detection**: Adjust the regex pattern in `src/components/Chat.tsx` to detect different keywords

## Testing

1. Start the development server: `npm run dev`
2. Open the site and click the chat button (bottom right)
3. Try asking questions about thatched roof insurance
4. Ask about quotes or pricing to test quote interest detection
5. Verify that the AI directs you to the quote form

## Notes

- The chat uses DeepSeek Chat model for cost efficiency and good performance
- Sales lead emails are sent to `sampettiford@googlemail.com` - update in `sendSalesLeadEmail` function if needed
- The chat window is responsive and works on mobile devices
- The system is optimized to convert chat conversations into quote form completions

