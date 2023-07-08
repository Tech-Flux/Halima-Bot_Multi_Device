
let handler = async (m, { conn, text, usedPrefix, command, args, participants, isOwner }) => {
	
   if (!isOwner) return conn.reply(m.chat, `*Invite bot to a group*\n\nHello @${m.sender.split('@')[0]}\nYou can rent the bot to join a group`.trim(), m, { mentions: [m.sender] })
	
  let time = global.db.data.users[m.sender].lastjoin + 86400000
  let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
  let delay = time => new Promise(res => setTimeout(res, time))
 
  let name = m.sender 
  let [_, code] = text.match(linkRegex) || []
  if (!args[0]) throw `✳️ Send the Group link\n\n 📌 Example:\n *${usedPrefix + command}* <link> <days>\n\n*Days are numbers of days that the bot will be in group*` 
  if (!code) throw `✳️ Link inválid`
  if (!args[1]) throw `📌 Number of days missing\n\n Example:\n *${usedPrefix + command}* <link> 2`
  if (isNaN(args[1])) throw `✳️ Number only, which represents the days the bot will be in the group!`
  let owbot = global.owner[1] 
  m.reply(`😎 Wait 3 seconds, I will join the group`)
  await delay(3000)
  try {
  let res = await conn.groupAcceptInvite(code)
  let b = await conn.groupMetadata(res)
  let d = b.participants.map(v => v.id)
  let member = d.toString()
  let e = await d.filter(v => v.endsWith(owbot + '@s.whatsapp.net'))
  let nDays = 86400000 * args[1]  
  let now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += nDays
  else global.db.data.chats[res].expired = now + nDays
  if (e.length) await m.reply(`✅ *I successfully joined the group* \n\n≡ Info of the group \n\n *Name :* ${await conn.getName(res)}\n\nThe bot will automatically exit after\n\n${msToDate(global.db.data.chats[res].expired - now)}`)
 
 if (e.length) await conn.reply(res, `🏮 Hello Everyone 

@${owbot} is my creator if you have any doubts
I was invited by *${m.name}*`, m, {
    mentions: d
     }).then(async () => {
     await delay(7000)
     }).then( async () => {
     await conn.reply(res, `Okay all relax 🤭`, 0)
     await conn.reply(global.owner[1]+'@s.whatsapp.net', `≡ *INVITATION TO GROUP*\n\n@${m.sender.split('@')[0]} has invited *${conn.user.name}* to the group\n\n*${await conn.getName(res)}*\n\n*ID* : ${res}\n\n📌 Enlace : ${args[0]}\n\nThe bot will automatically exit after \n\n${msToDate(global.db.data.chats[res].expired - now)}`, null, {mentions: [m.sender]})
     })
     if (!e.length) await conn.reply(global.owner[1]+'@s.whatsapp.net', `≡ *INVITATION TO GROUP*\n\n@${m.sender.split('@')[0]} ha invitado a *${conn.user.name}* to the group\n\n*${await conn.getName(res)}*\n\n*ID* : ${res}\n\n📌 Enlace : ${args[0]}\n\nThe bot will automatically exit after\n\n ${msToDate(global.db.data.chats[res].expired - now)}`, null, {mentions: [m.sender]})
     if (!e.length) await m.reply(`✳️ Successfully invite the bot to the group\n\n${await conn.getName(res)}\n\nThe bot will automatically exit after *${msToDate(global.db.data.chats[res].expired - now)}*`).then(async () => {
     let mes = `Hello everyone 👋🏻
     
*${conn.user.name}* is one of WhatsApp's multi-device bots built with Node.js, *${conn.user.name}* Just invited by *${m.name}*

to see the Menu of the bot type

${usedPrefix}help
@${conn.user.jid.split('@')[0]} will exit automatically after \n\n${msToDate(global.db.data.chats[res].expired - now)}`
  await conn.reply(res, mes, m, {
        mentions: d
         })
     })
    } catch (e) {
      conn.reply(global.owner[1]+'@s.whatsapp.net', e)
      throw `✳️ *Sorry, the bot can't join groups*`
      }
}
handler.help = ['join']
handler.tags = ['']
handler.command = ['join', 'invite'] 

//handler.owner = true

export default handler

function msToDate(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days*\n ', h, ' *Hours*\n ', m, ' *Minutes*\n ', s, ' *Segundos* '].map(v => v.toString().padStart(2, 0)).join('')
}
