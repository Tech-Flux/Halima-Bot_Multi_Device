
import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `✳️ Your number already registered\n\nWant to unregister?\n\n 📌 Use this command to delete your record \n*${usedPrefix}unreg* <serial number>`
  if (!Reg.test(text)) throw `⚠️ Format incorrect\n\n ✳️ Use the command: *${usedPrefix + command} name.age*\n📌Example : *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '✳️ Name cannot be empty'
  if (!age) throw '✳️ Age cannot be empty'
  if (name.length >= 30) throw '✳️ Name is Large' 
  age = parseInt(age)
  if (age > 100) throw '👴🏻 Wow Grandpa wants to play with bot'
  if (age < 5) throw '🚼 There is a baby grandparent'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
┌─「 *REGISTERED* 」─
▢ *Name:* ${name}
▢ *Age* : ${age} years
▢ *Serial* :
${sn}
└──────────────

 *${usedPrefix}help* to see the Menu
`.trim())
}
handler.help = ['reg'].map(v => v + ' <name.age>')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register'] 

export default handler

