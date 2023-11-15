let handler = async (m, { conn, participants, usedPrefix, command }) => {
  let kickte = `✳️ Use the correct command\n*${usedPrefix + command}*`

  if (!participants) {
    return m.reply("❌ This command can only be used in a group.");
  }

  // Get the list of admin JIDs
  let adminJids = participants.filter((p) => p.isAdmin).map((p) => p.jid);

  // Filter out non-admin participants
  let nonAdmins = participants.filter((p) => !adminJids.includes(p.jid));

  // Kick non-admin participants
  await conn.groupParticipantsUpdate(m.chat, nonAdmins.map((p) => p.jid), 'remove');
  
  if (nonAdmins.length > 0) {
    m.reply(`✅ Kicked ${nonAdmins.length} non-admin(s) from the group.`);
  } else {
    m.reply("❌ No non-admin participants to kick.");
  }
};

handler.help = ['kicks'];
handler.tags = ['group'];
handler.command = ['kicks', 'expulsar'];
handler.admin = true;
handler.group = true;
handler.botAdmin = true;

export default handler;
