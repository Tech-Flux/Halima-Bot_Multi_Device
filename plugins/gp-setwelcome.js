//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('✅ *The welcome message was configured*')
  } else throw `✳️ Enter the Welcome message\n\n@user mention\n@group (Group Name)\n@desc (description of group)`
}
handler.help = ['setwelcome']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
handler.owner = true

export default handler
