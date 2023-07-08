
import fetch from 'node-fetch'
import fg from 'api-dylux';
let handler = async (m, { conn, command, args, text }) => {
      
    if (!args[0]) return m.reply('✳️ *Enter the URL of a page*')
    m.react(rwait) 
	let full = /f$/i.test(command)
    let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
    let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url: u }))).buffer()
    //let ss = await fg.ssweb(url, /f$/i.test(command), args[1])
    conn.sendFile(m.chat, ss, 'ssweb.png', '✅ Page Screenshot', m) 
   m.react(done) 
}
handler.help = ['ssweb']
handler.tags = ['tools']
handler.command = ['ssweb', 'ss'] 
handler.diamond = true

export default handler
