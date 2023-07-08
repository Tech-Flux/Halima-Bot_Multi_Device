const da = [
  'https://tinyurl.com/gdd01',
  'https://tinyurl.com/gdd02',
  'https://tinyurl.com/gdd003',
  'https://tinyurl.com/gdd004',
  'https://tinyurl.com/gdd05',
  'https://tinyurl.com/gdd006'
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, pickRandom(da), 'dice.webp', '', m)
}
handler.help = ['dice']
handler.tags = ['game']
handler.command = ['dice'] 

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
