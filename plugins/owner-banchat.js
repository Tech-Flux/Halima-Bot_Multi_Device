//import db from '../lib/database.js'

let handler = async (m, { conn, isOwner, isAdmin, isROwner }) => {
    if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = true
    m.reply('✅  *Ok i won\'t talk here anymore!!*')
}
handler.help = ['banchat']
handler.tags = ['']
handler.command = ['banchat', 'chatoff','botoff'] 

export default handler
 
