
let handler = async (m, { conn, args, groupMetadata}) => {
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `✳️ Label or mention someone`
        if (!(who in global.db.data.users)) throw `✳️ User is missing from my database`
       let warn = global.db.data.users[who].warn
       if (warn > 0) {
         global.db.data.users[who].warn -= 1
         m.reply(`⚠️ *DELWARN*
         
▢ Warns: *-1*
▢ Warns total: *${warn - 1}*`)
         m.reply(`✳️ An admin reduced his warning, now you have *${warn - 1}*`, who)
         } else if (warn == 0) {
            m.reply('✳️ User has no warning')
        }

}
handler.help = ['delwarn']
handler.tags = ['group']
handler.command = ['delwarn', 'unwarn'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
