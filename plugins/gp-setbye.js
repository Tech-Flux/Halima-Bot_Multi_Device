//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sBye = text
    m.reply('✅ Farewell message set')
  } else throw `✳️ Enter the message\n@user `
}
handler.help = ['setbye']
handler.tags = ['group']
handler.command = ['setbye'] 
handler.admin = true
handler.owner = false

export default handler
