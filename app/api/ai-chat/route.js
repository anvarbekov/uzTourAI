export async function POST(request) {
  try {
    const { message, language = 'uz' } = await request.json();

    if (!process.env.GROQ_API_KEY) {
      return Response.json({ reply: "API key topilmadi." });
    }

    const langMap = {
      uz: "o'zbek", ru: "rus", en: "ingliz", tr: "turk", zh: "xitoy",
    };

    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
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
      }),
    });

    const data = await res.json();

    if (data.error) {
      return Response.json({ reply: "Xatolik: " + data.error.message });
    }

    const reply = data?.choices?.[0]?.message?.content || "Javob kelmadi.";

    return Response.json({ reply });

  } catch (error) {
    return Response.json({
      reply: "Server xatosi: " + error.message
    }, { status: 500 });
  }
}