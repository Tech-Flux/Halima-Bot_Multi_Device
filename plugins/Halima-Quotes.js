import fetch from 'node-fetch';

let handler = async (m, { conn }) => {
  try {
    const jsonData = await fetchQuotes();
    if (jsonData) {
      const quote = pickRandom(jsonData).text;
      conn.sendMessage(m.chat, { text: quote, mentions: [m.sender] }, { quoted: m });
    } else {
      conn.reply(m.chat, 'Failed to fetch quotes.', m);
    }
  } catch (error) {
    console.error(error);
    conn.reply(m.chat, 'Failed to fetch quotes.', m);
  }
};

handler.help = ['ranquote'];
handler.tags = ['quotes'];
handler.command = /^(ranquote|ranquotes)$/i;

export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

async function fetchQuotes() {
  try {
    const apiData = await fetch('https://type.fit/api/quotes');
    const jsonData = await apiData.json();
    return jsonData;
  } catch (error) {
    console.error(error);
    return null;
  }
}
