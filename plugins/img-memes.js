/*
     ig : https://www.instagram.com/fg98._/
*/
import hispamemes from 'hispamemes'

let handler = async (m, { conn, usedPrefix, command }) => {
  const meme = hispamemes.meme()
  const caption = '*ᴍᴀᴅᴇ ᴡɪᴛʜ ❤️ ʙʏ ᴀʙᴅᴜʟ*' // Replace with your desired caption
  conn.sendFile(m.chat, meme, '', caption, m)
  m.reply(global.wait)
  m.react('😆')
}

handler.help = ['meme']
handler.tags = ['img']
handler.command = ['meme', 'memes']
handler.diamond = true

export default handler

