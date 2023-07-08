let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`▢ ɢʀᴏᴜᴘ : *${groupMetadata.subject}*\n▢ ᴍᴇᴍʙᴇʀs : *${participants.length}*${text ? `\n▢ Message : ${text}\n` : ''}\n┌───⊷ *MENTIONS*\n` + users.map(v => '┃▢ @' + v.replace(/@.+/, '')).join`\n` + '\n└──✪ Halima ┃ ᴮᴼᵀ ✪──', null, {
        mentions: users
    })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true

export default handler
