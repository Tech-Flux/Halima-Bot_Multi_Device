import fetch from 'node-fetch';

const handler = async (m, { conn }) => {
  try {
    const res = await fetch('https://some-random-api.com/animu/quote');
    if (!res.ok) throw await res.text();
    const json = await res.json();
    const { sentence, character, anime } = json;

    const message = `*❖Quote*\n ${sentence}\n\n*❖Character*\n ${character}\n\n*❖Anime*\n ${anime}`;
    conn.sendMessage(m.chat, { text: message }, 'extendedTextMessage', { quoted: m });
  } catch (error) {
    console.error(error);
  }
};

handler.help = ['animequote'];
handler.tags = ['quotes'];
handler.command = /^(animequote)$/i;

export default handler;



