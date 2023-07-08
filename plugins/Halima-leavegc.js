let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
await conn.reply(id, '*Am told to leave the group by My creator Abdul, so it was nice seing you guys, Untill then do me a favor take care of yourself, ok🥹❤️👋*') 
await conn.groupLeave(id)}
handler.command = /^(leavegc|gout|leave)$/i
handler.group = true
handler.rowner = true
export default handler