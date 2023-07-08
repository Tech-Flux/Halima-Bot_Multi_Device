
let handler = async (m, { conn }) => {

let infobt = `
≡  *Halimaᴮᴼᵀ ┃ SUPPORT*

◈ ━━━━━━━━━━━━━━━━━━━━ ◈
▢ Grupo *1*
https://chat.whatsapp.com/IfcVaQFsS8UCTkSEugeSt2

▢ Grupo *2*
https://chat.whatsapp.com/IfcVaQFsS8UCTkSEugeSt2

▢ Grupo *NSFW* 
https://chat.whatsapp.com/IfcVaQFsS8UCTkSEugeSt2

◈ ━━━━━━━━━━━━━━━━━━━━ ◈

▢ *Telegram*
• https://t.me/+QeXaHkt8BmgxYjFk

▢ *YouTube*
• https://www.youtube.com/@poisonmods\n\n_ᴍᴀᴅᴇ ᴡɪᴛʜ ❤️ ʙʏ ᴀʙᴅᴜʟ_`
    let pp = './fg_logo1.jpg';

  // Send the image file with the message as a single message
  await conn.sendFile(
    m.chat,
    pp,
    'menu.jpg',
    `
${infobt}
`.trim(),
    m
  );

}
handler.help = ['support']
handler.tags = ['main']
handler.command = ['support','inst'] 

export default handler
