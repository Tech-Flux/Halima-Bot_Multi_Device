let handler = async (m, { conn, text, usedPrefix, command }) => {

let time = global.db.data.users[m.sender].lastrob + 7200000
if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `*⏱️Hold on!* *wait* *${msToTime(time - new Date())}*\n*Do not misuse this command😡*`
let [nomor, pesan, jumlah] = text.split('.')
if (!nomor) throw `*Enter Number to Be spammed*\n\n_Example_ *${usedPrefix + command} number.text.amount*\n\n_Example_\n *${usedPrefix + command} 254798708xxx.Hello am Halima.99*`
if (!pesan) throw `*Enter Number to Be spammed*\n\n_Example_\n*${usedPrefix + command} number.text.amount*\n*_Example_*\n*❊ ${usedPrefix + command} 99999999999935*`
if (jumlah && isNaN(jumlah)) throw `*Enter Number to Be spammed*\n\n_Example_\n* ${usedPrefix + command} number.text.amount*\n\n_Example_\n\n_Example_\n*${usedPrefix + command} 254798708xxx.Hello am Halima.99*`
await delay(1000)
let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
await delay(10000)
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 10) throw `*Minimum* *10* *messages to spam*`
await delay(10000)
await m.reply(`*${fixedJumlah}**${nomor}*The Message was sent *${fixedJumlah}*to*${nomor}*🙂`)
await delay(10000)
for (let i = fixedJumlah; i > 1; i--) {
await delay(10000)
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}
global.db.data.users[m.sender].lastrob = new Date * 1
}
handler.help = ['spamwa']
handler.tags = ['tools']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = false
handler.register = true
handler.level = 0
handler.limit = 60
export default handler 
const delay = time => new Promise(res => setTimeout(res, time))

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hour " + minutes + " Min"}
