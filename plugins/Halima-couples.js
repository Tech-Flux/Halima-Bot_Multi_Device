let toM = a => '@' + a.split('@')[0]

function handler(m, { groupMetadata }) {
  let ps = groupMetadata.participants.map(v => v.id)
  let [a, b] = getRandomParticipants(ps, 2)
  
  m.reply(`${toM(a)} ❤️ ${toM(b)}\n*What is going on here, congratulations 💍💖🍻*`, null, {
    mentions: [a, b]
  })
}

handler.help = ['couples']
handler.tags = ['fun']
handler.command = ['couples']
handler.group = true

function getRandomParticipants(participants, count) {
  let randomParticipants = [];
  
  while (randomParticipants.length < count) {
    let participant = participants[Math.floor(Math.random() * participants.length)];
    if (!randomParticipants.includes(participant)) {
      randomParticipants.push(participant);
    }
  }
  
  return randomParticipants;
}

export default handler
