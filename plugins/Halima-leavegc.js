let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
await conn.reply(id, '*_Ok Abdul take it easy am leaving, not like i have refused to go!, nkt!! bye🥹❤️👋_*') 
await conn.groupLeave(id)}
handler.command = /^(leavegc|gout|leave|go)$/i
handler.group = true
handler.rowner = true
export default handler