//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `✳️ Label or mention someone\n\n📌 Example : ${usedPrefix + command} @user`
if (global.prems.includes(who.split`@`[0])) throw '✳️ The Mentioned User Already is premium'
global.prems.push(`${who.split`@`[0]}`)

conn.reply(m.chat, `
✅ PREMIUM

@${who.split`@`[0]} *Now you become a premium user*
┌───────────
▢ *Name:* ${user.name}
└───────────
`, m, { mentions: [who] })

}
handler.help = ['addprem']
handler.tags = ['']
handler.command = ['addprem', 'addpremium','prem'] 

handler.group = true
handler.rowner = true

export default handler
