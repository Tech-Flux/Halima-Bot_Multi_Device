import { toDataURL } from 'qrcode'
let wm = "*ᴍᴀᴅᴇ ᴡɪᴛʜ ❤️ ʙʏ ᴀʙᴅᴜʟ*"
let handler = async (m, { text, conn }) => {
if (!text) throw `*Give me texts to convert❤️🙂*`
conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), { scale: 8 }), 'qrcode.png',wm, m)
}
handler.help = ['qrcode'].map(v => '' + v + '')
handler.tags = ['internet']
handler.command = /^qr(code)?$/i
handler.money = 20
export default handler
