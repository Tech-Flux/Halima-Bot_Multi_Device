//import db from '../lib/database.js'

let handler = async (m, { conn }) => {

  let hasil = Math.floor(Math.random() * 5000)
  let time = global.db.data.users[m.sender].lastmiming + 14400000
  if (new Date - global.db.data.users[m.sender].lastmiming < 14400000) throw `⏳ *Hold on You have* *${msToTime(time - new Date())}*  to return to the mine⏳`
  global.db.data.users[m.sender].exp += hasil
  m.react('⛏️')
  m.reply(`
🎉 That's great! Reward *${hasil} XP*`)
  m.react('⛏️')
  global.db.data.users[m.sender].lastmiming = new Date * 1
}
handler.help = ['mine']
handler.tags = ['econ']
handler.command = ['mine'] 

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " hour(s) " + minutes + " minutes(s) " + seconds + " seconds(s)" 
  m.react('⛏️')
}
