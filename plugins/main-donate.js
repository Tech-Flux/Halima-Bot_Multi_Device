
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
*You can donate if you want to help keep the bot active🙂*

▢ *M-PESA*
• *Number :* 0798708444

`
let img = 'https://i.ibb.co/37FP2bk/donate.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
   m.react('💰')

}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['donate'] 

export default handler
