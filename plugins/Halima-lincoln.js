import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  try {
    if (!text) {
      conn.reply(m.chat, '*⚠️ Please enter the name of a person to search for quotes.* \n Example:\n\n .quote Abraham Lincoln', m);
      return;
    }

    const jsonData = await fetchQuotes(text);
    if (jsonData) {
      const quote = pickRandom(jsonData)?.text;
      if (quote) {
        conn.sendMessage(m.chat, { text: quote, mentions: [m.sender] }, { quoted: m });
      } else {
        conn.reply(m.chat, '*❌ No quotes found for the specified person.*', m);
      }
    } else {
      conn.reply(m.chat, '*❌ Failed to fetch quotes.*', m);
    }
  } catch (error) {
    console.error(error);
    conn.reply(m.chat, '*❌ Failed to fetch quotes.*', m);
  }
};

handler.help = ['quote <person>'];
handler.tags = ['quotes'];
handler.command = /^quote$/i;

export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

async function fetchQuotes(person) {
  try {
    const encodedPerson = encodeURIComponent(person);
    const apiUrl = `https://type.fit/api/quotes?author=${encodedPerson}`;
    const apiData = await fetch(apiUrl);
    const jsonData = await apiData.json();
    return jsonData;
  } catch (error) {
    console.error(error);
    return null;
  }
}
