let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let onlineUsers = participants.filter(p => p.userStatus && p.userStatus.status === 101).map(p => ({ tag: p.jid }));
    m.reply(`▢ ɢʀᴏᴜᴘ : *${groupMetadata.subject}*\n▢ Online Members : *${onlineUsers.length}*${text ? `\n▢ Message : ${text}\n` : ''}\n┌───⊷ *MENTIONS*\n` + onlineUsers.map(user => '┃▢ @' + user.tag.replace(/@.+/, '')).join`\n` + '\n└──✪ Halima ┃ ᴮᴼᵀ ✪──', null, {
        mentions: onlineUsers
    });
}

handler.help = ['tagonline'];
handler.tags = ['group'];
handler.command = ['tagonline'];
handler.admin = true;
handler.group = true;

export default handler;