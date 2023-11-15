import axios from 'axios';

let handler = async (m, { conn, text }) => {
  if (!text) throw '*ENTER NAME OF THE SONG*';
  try {
    let lolkeysapi = '0b89a8312b59ad8fd6c39538; // Replace this with your actual API key
    let res = await axios.get(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${encodeURIComponent(text)}`);
    let json = res.data;
    if (json.status !== 200 || !json.result || json.result.length === 0) {
      throw '*SONG NOT FOUND*';
    }
    let { link } = json.result[0];

    let res2 = await axios.get(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkeysapi}&url=${link}`);
    let json2 = res2.data;
    if (json2.status !== 200 || !json2.result || !json2.result.link) {
      throw '*SONG NOT FOUND*';
    }

    let { thumbnail, title, artists } = json2.result;

    let spotifyInfo = `❒═════❬ 𝐒𝐏𝐎𝐓𝐈𝐅𝐘 ❭═════╾❒\n┬\n├‣✨ *TITLE:* ${title}\n┴\n┬\n├‣🗣️ *ARTIST:* ${artists}\n┴\n┬\n├‣🌐 *𝚄𝚁𝙻*: ${link}\n┴\n┬\n├‣💚 *SEARCH URL:* ${json2.result.link}\n┴`;

    let audio = await axios.get(link, { responseType: 'arraybuffer' });
    conn.sendFile(m.chat, audio.data, 'spotify_song.mp3', spotifyInfo, m);
  } catch (error) {
    throw '*ERROR*';
  }
};

handler.command = /^(spotify|song)$/i;
export default handler;//relate
