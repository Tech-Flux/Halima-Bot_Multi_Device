import fetch from 'node-fetch';

let handler = async (m, { conn }) => {
  try {
    const loveQuotesData = await fetchLoveQuotes();
    if (loveQuotesData && loveQuotesData.length > 0) {
      const loveQuote = pickRandom(loveQuotesData);
      if (loveQuote) {
        conn.sendMessage(m.chat, { text: loveQuote, mentions: [m.sender] }, { quoted: m });
      } else {
        conn.reply(m.chat, '*❌ No love quotes found.*', m);
      }
    } else {
      conn.reply(m.chat, '*❌ Failed to fetch love quotes.*', m);
    }
  } catch (error) {
    console.error(error);
    conn.reply(m.chat, '*❌ Failed to fetch love quotes.*', m);
  }
};

handler.help = ['lovequote'];
handler.tags = ['fun'];
handler.command = /^lovequote$/i;

export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

async function fetchLoveQuotes() {
  try {
    const apiUrl = 'https://love-quote-api.herokuapp.com/quotes'; // API URL for fetching love quotes
    const apiData = await fetch(apiUrl);
    const jsonData = await apiData.json();
    return jsonData;
  } catch (error) {
    console.error(error);
    return null;
  }
}
