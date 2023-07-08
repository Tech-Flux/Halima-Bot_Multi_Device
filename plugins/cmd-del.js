//import db from '../lib/database.js'

let handler = async (m, { text }) => {
    let hash = text
    if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
    if (!hash) throw `✳️ Enter the name of the command`
    let sticker = global.db.data.sticker
    if (sticker[hash] && sticker[hash].locked) throw '✳️ You cannot clear this command'
    delete sticker[hash]
    m.reply(`✅ Command removed`)
}


handler.help = ['cmd'].map(v => 'del' + v + '')
handler.tags = ['cmd']
handler.command = ['delcmd']
handler.owner = true

export default handler
