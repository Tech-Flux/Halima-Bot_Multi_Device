const linkRegex = /(https?:\/\/[^\s]+)/i;

export async function before(m, { conn, isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return !0;
  if (!m.isGroup) return !1;

  let chat = global.db.data.chats[m.chat];
  let bot = global.db.data.settings[this.user.jid] || {};
  const hasLink = linkRegex.test(m.text);

  if (chat.antiLink && hasLink && !isAdmin) {
    if (isBotAdmin) {
      const groupInviteLink = `https://${await this.groupInviteCode(m.chat)}`;
      if (m.text.includes(groupInviteLink)) return !0;
    }
    await conn.reply(m.chat, `*≡ Link Detected⚠️*
            
_kicked @${m.sender.split('@')[0]},_* ${isBotAdmin ? '' : '\n\n*_I\'m not an admin,'}`, null, { mentions: [m.sender] });
    if (isBotAdmin && chat.antiLink) {
      await conn.sendMessage(m.chat, { delete: m.key });
      await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    } else if (!chat.antiLink) {
      return;
    }
  }
  return !0;
}
