
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	
if (!args[0]) throw `✳️ Missing survey text \n\n📌 Example : \n*${usedPrefix + command}* Message  `
if (!text.includes('|')) throw  `✳️ Separate surveys with *|* \n\n📌 Ejemplo : \n*${usedPrefix + command}* My Survey`

let name = await conn.getName(m.sender)
let a = []
let b = text.split('|')
for (let c = 1 || 0; c < b.length; c++) {
a.push([b[c]])
			}
			return conn.sendPoll(m.chat, `📊 *Survey requested by:* ${name}\n\n*Message:* ${text.split('|')[0]}`, a, m)
}
handler.help = ['poll']
handler.tags = ['group'] 
handler.command = ['poll','polling'] 
handler.group = true

export default handler
