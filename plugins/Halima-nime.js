import fetch from 'node-fetch';

let handler = async function (m, { conn, text, usedPrefix }) {
  let m2 = `
  ≡ *Welcome to Anime Menu* ≡

  ▢ *Enjoy creating Logos*  
┌─⊷☾ ᴀɴɪᴍᴇ ☽︎━━◈
┃▢➥ .waifu
┃▢➥ .neko
┃▢➥ .megumin
┃▢➥ .loli
┃▢➥ .akira
┃▢➥ .akiyama
┃▢➥ .anna
┃▢➥ .asuna
┃▢➥ .ayuzawa
┃▢➥ .boruto
┃▢➥ .chiho
┃▢➥ .chitoge
┃▢➥ .deidara
┃▢➥ .erza
┃▢➥ .elaina
┃▢➥ .eba
┃▢➥ .emilia
┃▢➥ .hestia
┃▢➥ .hinata
┃▢➥ .inori
┃▢➥ .isuzu
┃▢➥ .itachi
┃▢➥ .itori
┃▢➥ .kaga
┃▢➥ .kagura
┃▢➥ .kaori
┃▢➥ .keneki
┃▢➥ .kotori
┃▢➥ .kurumi
┃▢➥ .madara
┃▢➥ .mikasa
┃▢➥ .miku
┃▢➥ .minato
┃▢➥ .naruto
┃▢➥ .nezuko
┃▢➥ .sagiri
┃▢➥ .sasuke
┃▢➥ .sakura
┃▢➥ .cosplay
└───────────◈\n*ᴍᴀᴅᴇ ᴡɪᴛʜ ❤️ ʙʏ ᴀʙᴅᴜʟ*
  `;

  let pp = './src/fg_logo.jpg';
  conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl);

};

handler.all = true; // Set 'all' property to true to react to every message

handler.help = ['animemenu'];
handler.tags = ['main1'];
handler.command = ['animemenu'];

export default handler;
