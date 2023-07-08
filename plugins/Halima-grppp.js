let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/.test(mime)) {
let img = await q.download()
if (!img) throw '*⚠️️ Respond to image.*'
await conn.updateProfilePicture(m.chat, img).then(_ => m.reply('⚘ *Done profile photo changed sucessfully!!✅*'))
} else throw '*⚠️️ Respond to image.*'}
handler.command = /^setpp?$/i
handler.help = ['setpp']
handler.tags = ['group']
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler