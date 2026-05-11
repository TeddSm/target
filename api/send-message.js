export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, contact, niche, instagram } = req.body;
  const token = process.env.TOKEN;
  const chatId = process.env.CHAT_ID;

  const message = `
🚀 **Нова заявка з сайту!**
👤 Ім'я: ${name}
📞 Контакт: ${contact}
💼 Ніша: ${niche}
📸 Instagram: ${instagram || "Не вказано"}
    `;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ success: false });
    }
  } catch (error) {
    return res.status(500).json({ success: false });
  }
}
