import OpenAI from 'openai';

export async function POST(request) {
  try {
    const { message, language = 'uz' } = await request.json();

    if (!process.env.OPENAI_API_KEY) {
      return Response.json({
        reply: "API key topilmadi."
      });
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const langMap = {
      uz: "o'zbek",
      ru: "rus",
      en: "ingliz",
      tr: "turk",
      zh: "xitoy",
    };

    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      max_tokens: 1024,
      messages: [
        {
          role: 'system',
          content: `Siz UzTour — O'zbekistonning rasmiy turizm platformasining AI yordamchisisiz.
Faqat ${langMap[language] || "o'zbek"} tilida javob bering.
O'zbekiston viloyatlari, tarixiy joylar, mehmonxonalar va sayohat rejalari haqida yordam bering.
Javoblarni qisqa, aniq va foydali qiling.`
        },
        {
          role: 'user',
          content: message
        }
      ],
    });

    const reply = response.choices[0]?.message?.content || "Javob kelmadi.";

    return Response.json({ reply });

  } catch (error) {
    return Response.json({
      reply: "Xatolik: " + error.message
    }, { status: 500 });
  }
}