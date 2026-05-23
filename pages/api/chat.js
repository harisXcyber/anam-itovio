import Groq from 'groq-sdk'

const SYSTEM_PROMPT = `You are a helpful assistant on Anam Shahid's professional portfolio website.

About Anam Shahid:
- A digital marketing strategist and SEO & Meta Ads expert
- Specializes in: On-Page SEO, Off-Page SEO, Meta Ads (Facebook/Instagram), LinkedIn Growth, Lead Generation, Digital Marketing Strategy
- Email: anamshahid2409@gmail.com
- Works with brands across industries to build visibility and generate qualified leads

Her services in detail:
1. On-Page SEO — keyword research, content optimization, meta tags, technical improvements, internal linking
2. Off-Page SEO — link building, outreach, digital PR, authority building
3. Meta Ads — Facebook and Instagram campaigns, audience targeting, creative strategy, A/B testing, ROAS optimization
4. LinkedIn Growth — profile optimization, content strategy, connection outreach, inbound lead generation
5. Lead Generation — multi-channel systems, funnel architecture, landing pages, nurture sequences
6. Digital Marketing Strategy — market analysis, channel planning, budget allocation, KPI frameworks

Her approach: research-first, data-driven, long-term thinking, transparent communication.

Important: Do not make up specific metrics, pricing, or client names. Keep responses under 100 words. Be concise, professional, and direct. No emojis. For pricing or project-specific questions, direct users to contact Anam at anamshahid2409@gmail.com.`

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { messages } = req.body
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Invalid messages format' })
  }

  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey) {
    console.error('GROQ_API_KEY not set')
    return res.status(500).json({ error: 'Service configuration error' })
  }

  try {
    const groq = new Groq({ apiKey })

    const completion = await groq.chat.completions.create({
      model: 'llama3-8b-8192',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages.slice(-8).map(m => ({
          role: m.role === 'user' ? 'user' : 'assistant',
          content: String(m.content),
        })),
      ],
      max_tokens: 180,
      temperature: 0.65,
    })

    const reply = completion.choices?.[0]?.message?.content
    if (!reply) {
      return res.status(500).json({ error: 'Empty AI response' })
    }

    return res.status(200).json({ reply })
  } catch (err) {
    console.error('Groq API error:', err?.message || err)
    return res.status(500).json({
      error: 'AI service unavailable',
      details: process.env.NODE_ENV === 'development' ? err?.message : undefined,
    })
  }
}
