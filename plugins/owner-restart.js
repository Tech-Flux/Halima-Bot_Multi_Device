import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (conn.user.jid == conn.user.jid) {
    await m.reply('*🔄 Restarting Bot...*')
      await m.reply('*ʜᴀʟɪᴍᴀ ʀᴇsᴛᴀʀᴛᴇᴅ🧕*')
    m.react('⏰')
    process.send('reset')
  } else throw 'e'
}

handler.help = ['restart']
handler.tags = ['']
handler.command = ['restart'] 

handler.rowner = true

export default handler
