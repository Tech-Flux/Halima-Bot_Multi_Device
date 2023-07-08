let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*This command generates image from texts*\n\n*—◉ 𝙴xample usage*\n*◉ ${usedPrefix + command}  Get this bot*\n*◉ ${usedPrefix + command} Halima Bot Awesome*`
try {
m.reply('*Processing image *')
let tiores = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`)
await conn.sendFile(m.chat, tiores.data, null, null, m)
} catch {
throw `*Errrror bro!!!*`
}}
handler.command = ['ai2', 'dalle', 'gen', 'gimg', 'openai2']
export default handler
