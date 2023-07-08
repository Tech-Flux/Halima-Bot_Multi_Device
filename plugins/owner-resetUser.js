
let handler = async (m, { conn, text }) => {
    function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

    text = no(text)

  if(isNaN(text)) {
		var number = text.split`@`[1]
  } else if(!isNaN(text)) {
		var number = text
  }

    if(!text && !m.quoted) return m.reply(`*❏To reset tag the user or reply to user*`)
    if(isNaN(number)) return m.reply(`❏ The number you entered is invalid`)

      try { 
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
    	let number = user.split('@')[0]
        delete global.global.db.data.users[user]
        conn.reply(m.chat, `*❏ User Restarted*\n\n✅ Restarted to @${number} in the *DataBase*`, null, { mentions: [user] })
    }
    
}
handler.help = ['reset']
handler.tags = ['']
handler.command = ['reset'] 
handler.rowner = true

export default handler
