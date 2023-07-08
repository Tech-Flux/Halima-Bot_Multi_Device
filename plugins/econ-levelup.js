
import { canLevelUp, xpRange } from '../lib/levelling.js'
let handler = async (m, { conn }) => {
  let name = conn.getName(m.sender)
  let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://i.imgur.com/whjlJSf.jpg')
  let user = global.db.data.users[m.sender]
  if (!canLevelUp(user.level, user.exp, global.multiplier)) {
    let { min, xp, max } = xpRange(user.level, global.multiplier)
    let txt = `
┌───⊷ *LEVEL*
*┃▢➥* Name : *${name}*
*┃▢➥* Level : *${user.level}*
*┃▢➥* XP : *${user.exp - min}/${xp}*
*┃▢➥* Rank : *${user.role}*
└──────────────

You're missing *${max - user.exp}* de *XP* to level up
`.trim()
    try {
      let imgg = API('fgmods', '/api/maker/rank', {
        username: name,
        xp: user.exp - min,
        exp: xp,
        avatar: pp,
        level: user.level,
        ranklog: 'https://i.ibb.co/7gfnyMw/gold.png',
        background: 'https://i.ibb.co/CsNgBYw/qiyana.jpg'
      }, 'apikey')

     // conn.sendFile(m.chat, imgg, 'level.jpg', txt, m)
    } catch (e) {
      m.reply(txt)
    }
  }
  let before = user.level * 1
  while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
  if (before !== user.level) {
    user.role = global.rpg.role(user.level).name

    let str = `
┌─⊷ *LEVEL UP*
*┃▢➥* *Last Level:* *${before}*
*┃▢➥* *New Level:* *${user.level}*
*┃▢➥* *Rank:* *${user.role}*
└──────────────
*The more you talk with me the more you levelup😃*\n
https://github.com/x-poison
`.trim()
    try {
      let img = API('fgmods', '/api/maker/levelup', {
        avatar: pp
      }, 'apikey')
      m.reply(str)
      m.react('🏆')
    } catch (e) {
      m.reply(str)
    }
  }
}

handler.help = ['levelup']
handler.tags = ['econ']
handler.command = ['nivel', 'lvl', 'levelup', 'level']

export default handler