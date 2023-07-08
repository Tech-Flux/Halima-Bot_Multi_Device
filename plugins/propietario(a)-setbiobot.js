t handler = async (m, { conn, text }) => {
   if (!text) throw `Y EL TEXTO?`
     try {
		await conn.updateProfileStatus(text).catch(_ => _)
		conn.reply(m.chat, '*Bot Bio Changed Successful✅️*', m)
} catch {
       throw '*Error try Again...*'
     }
}
handler.help = ['setbotbio']
handler.tags = ['owner']
handler.command = /^setbio|setbotbio$/i
handler.owner = true

export default handler