import { pinterest } from '@bochilteam/scraper';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `✳️ What image do you want me to look for?\n\n📌 Example  : ${usedPrefix + command} ayanokoji`;
  const json = await pinterest(text);
  const imageCount = 5;
  const images = [];

  for (let i = 0; i < imageCount; i++) {
    images.push(json.getRandom());
  }

  for (let i = 0; i < images.length; i++) {
    conn.sendFile(m.chat, images[i], 'pinterest.jpg', '', m);
  }

  const message = `*Wait am sending photos of ${text}...❤️🫶*`;
  conn.reply(m.chat, message, m);
  m.react('⏱️') 
  m.reply(global.wait)
};

handler.help = ['pinterest'];
handler.tags = ['img'];
handler.command = ['pint', 'pinterest'];

export default handler;
