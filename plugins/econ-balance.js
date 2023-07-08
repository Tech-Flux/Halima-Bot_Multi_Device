
let handler = async (m, {conn, usedPrefix}) => {
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ User is missing from my database`
    conn.reply(m.chat, `
┌───⊷ *BALANCE* ⊶
▢ *📌NAME* : *@${who.split('@')[0]}*
▢ *💎Diamonds* : *${user.diamond}*
▢ *⬆️XP* :  *${user.exp}*
└──────────────

*NOTE :* 
You can buy 💎 diamonds using the commands
❏ *${usedPrefix}buy <diamond>*
❏ *${usedPrefix}buyall*`, m, { mentions: [who] })
}
handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 

export default handler
