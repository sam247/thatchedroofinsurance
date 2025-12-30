# Chat System Setup

This site uses Vercel AI SDK with OpenAI to provide an AI-powered chat assistant trained on the site's content.

## Features

- **AI-Powered Chat**: Uses OpenAI GPT-4o-mini to answer questions about thatched roof insurance
- **Site Content Training**: Trained on `public/llm.txt` and all blog articles
- **Lead Capture**: Automatically detects when users provide contact information and emails leads to sampettiford@googlemail.com
- **Professional UI**: Custom chat interface matching the site design

## Required Environment Variables

Add these to your `.env.local` file:

```env
OPENAI_API_KEY=your_openai_api_key_here
RESEND_API_KEY=your_resend_api_key_here
```

### Getting API Keys

1. **OpenAI API Key**:
   - Sign up at https://platform.openai.com
   - Go to API Keys section
   - Create a new API key
   - Add it to `.env.local` as `OPENAI_API_KEY`

2. **Resend API Key** (for email notifications):
   - Sign up at https://resend.com
   - Get your API key from the dashboard
   - Add it to `.env.local` as `RESEND_API_KEY`
   - Verify your domain in Resend (or use their test domain for development)

## How It Works

1. **Chat Component** (`src/components/Chat.tsx`):
   - Floating chat button with custom icon (`/chat_icon.jpeg`)
   - Chat window with message history
   - Automatic lead detection

2. **API Route** (`src/app/api/chat/route.ts`):
   - Loads site content from `llm.txt` and articles
   - Uses OpenAI to generate responses
   - Sends lead emails via Resend when contact info is detected

3. **Lead Detection**:
   - Monitors user messages for contact information
   - Triggers email to sampettiford@googlemail.com with full conversation
   - Email includes latest message and full conversation history

## Customization

- **Chat Icon**: Located at `public/chat_icon.jpeg` (64x64px recommended)
- **System Prompt**: Edit the `systemPrompt` in `src/app/api/chat/route.ts`
- **Email Template**: Modify the HTML template in `sendLeadEmail` function
- **Lead Detection**: Adjust the regex pattern in `src/components/Chat.tsx` useEffect

## Testing

1. Start the development server: `npm run dev`
2. Open the site and click the chat button (bottom right)
3. Try asking questions about thatched roof insurance
4. Provide contact information to test lead capture

## Notes

- The chat uses `gpt-4o-mini` for cost efficiency. Change to `gpt-4o` in the API route for better quality.
- Lead emails are sent to `sampettiford@googlemail.com` - update in `sendLeadEmail` function if needed.
- The chat window is responsive and works on mobile devices.

