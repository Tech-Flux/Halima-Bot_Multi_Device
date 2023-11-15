import db from '../lib/database.js';

let reg = 400;
let handler = async (m, { conn, args, usedPrefix, command }) => {
   // m.reply(global.wait);
    let fa = `
*How much do you want to bet?😃*

*📌 Example :*
*${usedPrefix + command}* _1000_`.trim();
    if (!args[0]) throw fa;
    if (isNaN(args[0])) throw fa;
    let apuesta = parseInt(args[0]);
    let users = global.db.data.users[m.sender];
    let time = users.lastslot + 10000;
    if (new Date() - users.lastslot < 10000) throw `⏳ Wait *${msToTime(time - new Date())}* to use again`;
    if (apuesta < 1000) throw ' *Minimum bet is 1000 XP* ⚠️';
    if (users.exp < apuesta) {
        throw `*⚠️ Insufficient *XP*`;
        m.react('⚠️');
    }

    let emojis = ["🍎", "🍌", "🍇", "🍊"];
    let a = Math.floor(Math.random() * emojis.length);
    let b = Math.floor(Math.random() * emojis.length);
    let c = Math.floor(Math.random() * emojis.length);
    let d = Math.floor(Math.random() * emojis.length);
    let x = [],
        y = [],
        z = [],
        w = [];
    for (let i = 0; i < 4; i++) {
        x[i] = emojis[a];
        a++;
        if (a == emojis.length) a = 0;
    }
    for (let i = 0; i < 4; i++) {
        y[i] = emojis[b];
        b++;
        if (b == emojis.length) b = 0;
    }
    for (let i = 0; i < 4; i++) {
        z[i] = emojis[c];
        c++;
        if (c == emojis.length) c = 0;
    }
    for (let i = 0; i < 4; i++) {
        w[i] = emojis[d];
        d++;
        if (d == emojis.length) d = 0;
    }
    let end;
    if (a == b && b == c && c == d) {
        end = `🎁 REWARD\n *+${apuesta + apuesta + apuesta + apuesta} XP*`;
        users.exp += apuesta + apuesta;
    } else if (a == b || a == c || b == c || b == d || c == d) {
        end = `🔮  You almost made it, keep trying 🙃\n Take this *+${reg} XP*`;
        users.exp += reg;
    } else {
        end = `😔 Lost  *-${apuesta} XP*`;
        users.exp -= apuesta;
    }
    users.lastslot = new Date() * 1;
    return await m.reply(
        `
       🎰 ┃ *SLOT MACHINE* 
     ────────────────
     ┃  ${x[0]} ┃ ${y[0]} ┃ ${z[0]} ┃ ${w[0]} ┃
     ┃  ${x[1]} ┃ ${y[1]} ┃ ${z[1]} ┃ ${w[1]} ┃
     ┃  ${x[2]} ┃ ${y[2]} ┃ ${z[2]} ┃ ${w[2]} ┃
     ┃  ${x[3]} ┃ ${y[3]} ┃ ${z[3]} ┃ ${w[3]} ┃
     ────────────────
     ┃  🎰 ┃ 🎰 ┃ 🎰 ┃ 🎰 ┃
        
${end}`, null, { react: '❌' });
};

handler.help = ['slot'];
handler.tags = ['game'];
handler.command = ['slot'];

export default handler;

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return seconds + " Seconds(s)";
}
