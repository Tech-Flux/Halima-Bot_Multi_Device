//import db from '../lib/database.js'

let handler = async (m, { text, usedPrefix, command }) => {
    global.db.data.sticker = global.db.data.sticker || {}
    if (!m.quoted) throw `✳️Respond to a message  *${usedPrefix + command}*`
    if (!m.quoted.fileSha256) throw '⚠️ mention message'
    if (!text) throw `✳️ Missing command`
    let sticker = global.db.data.sticker
    let hash = m.quoted.fileSha256.toString('base64')
    if (sticker[hash] && sticker[hash].locked) throw '⚠️ You do not have permission to change this Sticker command'
    sticker[hash] = {
        text,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: + new Date,
        locked: false,
    }
    m.reply(`✅ Command changed`)
}


handler.help = ['cmd'].map(v => 'set' + v + '')
handler.tags = ['cmd']
handler.command = ['setcmd']
handler.owner = true

export default handler
