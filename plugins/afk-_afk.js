//import db from '../lib/database.js'

export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
  ✅ You are no longer AFK
${user.afkReason ? ' \n▢ *Reason :* ' + user.afkReason : ''}
▢ *AFK during :* ${(new Date - user.afk).toTimeString()}
  `.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`
💤 The user you mention is AFK 

${reason ? '▢ *Reason* : ' + reason : '▢ *Reason* : No reason*'}
▢ *AFK during :* ${(new Date - afkTime).toTimeString()}
  `.trim())
    }
    return true
}
