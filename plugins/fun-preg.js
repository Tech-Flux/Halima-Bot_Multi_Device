import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	
 let name = conn.getName(m.sender)
  if (!text) throw `✳️ *Example :*\n\n *${usedPrefix + command}* *who are you?*`
  m.react('🫣') 
  //let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(text), lc: "es" }, ''))
  let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=es`)
  let json = await res.json()
  if (json.success) 
m.reply(`≡ *QUESTION*
 
▢ *Question:* ${text}
▢ *Answer:* ${json.success.replace('simsimi', 'Halima').replace('Simsimi', 'Halima').replace('sim simi', 'Halima')}`) 
  else throw json
}

handler.help = ['quiz']
handler.tags = ['fun']
handler.command = ['question', 'quiz'] 

export default handler
