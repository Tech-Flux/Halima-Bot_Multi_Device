//import db from '../lib/database.js'

let handler = async (m, { conn, isOwner, isAdmin, isROwner} ) => {
    if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = false
    m.reply('✅ Active bot in this group')   
}
handler.help = ['unbanchat']
handler.tags = ['']
handler.command = ['chaton', 'unbanchat','boton'] 

export default handler
