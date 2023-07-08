import fg from 'api-dylux';

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `✳️ Enter the image you want to search for \n\n📌 Example: *${usedPrefix + command}* Billie Eilish`;
  let res = await fg.googleImage(text);
  const imageCount = 5;
  const images = [];
  
  m.react('✅') 

  for (let i = 0; i < imageCount; i++) {
    images.push(res.getRandom());
  }

  for (let i = 0; i < images.length; i++) {
    conn.sendFile(m.chat, images[i], 'img.png', '', m);
  }

  const message = `*Wait am sending photos of ${text}...❤️🫶*`;
  conn.reply(m.chat, message, m);
  m.reply(global.wait)
  m.react('⏱️') 
};

handler.help = ['image'];
handler.tags = ['img'];
handler.command = /^(img|image|gimage|imagen)$/i;
handler.diamond = true;

export default handler;
