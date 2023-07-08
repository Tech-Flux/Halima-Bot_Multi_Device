import fs from 'fs'
import acrcloud from 'acrcloud'
let acr = new acrcloud({
host: 'identify-eu-west-1.acrcloud.com',
access_key: 'c33c767d683f78bd17d4bd4991955d81',
access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu'
})

let handler = async (m) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (/audio|video/.test(mime)) { if ((q.msg || q).seconds > 20) return m.reply('*The file you uploaded is too big, we suggest you cut the big file to smaller file, 10-20 seconds Audio data is enough to identify*')
await conn.reply(m.chat, wait, m)
let media = await q.download()
let ext = mime.split('/')[1]
fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media)
let res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`))
let { code, msg } = res.status
if (code !== 0) throw msg
let { title, artists, album, genres, release_date } = res.metadata.music[0]
let txt = `*ʀᴇsᴜʟᴛs ᴀʀᴇ ᴏᴜᴛ*

• *📌 ᴛɪᴛʟᴇ:* ${title}
• *👨‍ ᴀʀᴛɪsᴛ:* ${artists !== undefined ? artists.map(v => v.name).join(', ') : '*Nothing🥺*'}
• *💾 ᴀʟʙᴜᴍ:* ${album.name || 'Nothing🥺*'}
• *🌐 ɢᴇɴʀᴇ:* ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'Nothing🥺*'}
• *📆 ᴅᴀᴛᴇ ʀᴇʟᴇᴀsᴇᴅ:* ${release_date || 'Nothing🥺*'}
`.trim()
fs.unlinkSync(`./tmp/${m.sender}.${ext}`)
m.reply(txt)
} else throw '*Respond to an Audio🎶*'
}
handler.command = /^quemusica|gani|whatmusic$/i
export default handler
