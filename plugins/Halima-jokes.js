import fetch from 'node-fetch';

let handler = async (m, { conn }) => {
  try {
    const jokesData = await fetchJokes();
    if (jokesData && jokesData.length > 0) {
      const joke = pickRandom(jokesData);
      const setup = joke.setup;
      const punchline = joke.punchline;
      
      if (setup && punchline) {
        conn.sendMessage(m.chat, { text: setup + '\n' + punchline, mentions: [m.sender] }, { quoted: m });
      } else {
        conn.reply(m.chat, '*❌ Invalid joke format.*', m);
      }
    } else {
      conn.reply(m.chat, '*❌ Failed to fetch jokes.*', m);
    }
  } catch (error) {
    console.error(error);
    conn.reply(m.chat, '*❌ Failed to fetch jokes.*', m);
  }
};

handler.help = ['joke'];
handler.tags = ['fun'];
handler.command = /^joke$/i;

export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

async function fetchJokes() {
  try {
    const apiUrl = 'https://official-joke-api.appspot.com/random_ten'; // API URL for fetching 10 random jokes
    const apiData = await fetch(apiUrl);
    const jsonData = await apiData.json();
    return jsonData;
  } catch (error) {
    console.error(error);
    return null;
  }
}
