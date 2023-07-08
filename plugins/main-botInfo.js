import { cpus as _cpus, totalmem, freemem } from 'os';
import util from 'util';
import { performance } from 'perf_hooks';
import { sizeFormatter } from 'human-readable';

let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
});

let handler = async (m, { conn, usedPrefix, command }) => {
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats);
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')); //groups.filter(v => !v.read_only)
  const used = process.memoryUsage();
  const cpus = _cpus().map((cpu) => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
    return cpu;
  });
  const cpu = cpus.reduce(
    (last, cpu, _, { length }) => {
      last.total += cpu.total;
      last.speed += cpu.speed / length;
      last.times.user += cpu.times.user;
      last.times.nice += cpu.times.nice;
      last.times.sys += cpu.times.sys;
      last.times.idle += cpu.times.idle;
      last.times.irq += cpu.times.irq;
      return last;
    },
    {
      speed: 0,
      total: 0,
      times: {
        user: 0,
        nice: 0,
        sys: 0,
        idle: 0,
        irq: 0,
      },
    }
  );

  let old = performance.now();
  let neww = performance.now();
  let speed = neww - old;

  let infobt = `  
*┌─⊷☾* *BOT INFO* ☽︎━━◈
┃▢ *${groupsIn.length}* Group chats
┃▢ *${groupsIn.length}* United groups
┃▢ *${groupsIn.length - groupsIn.length}* Left groups
┃▢ *${chats.length - groupsIn.length}* Private chats
┃▢ *${chats.length}* Total Chats
*└───────────━◈*
*┌─⊷☾* *OWNER* ☽︎━━◈
┃▢ Instagram :
┃▢ • https://www.instagram.com/noo.b.i.e/
┃▢ WhatsApp :
┃▢• 254798708444
┃▢ GitHub :
┃▢• https://github.com/x-poison
┃▢ Telegram : 
┃▢• https://t.me/kesandy 
┃▢• https://t.me/teampoisonmods
┃▢ • https://t.me/+QeXaHkt8BmgxYjFk
┃▢ YouTube : 
┃▢ • https://youtube.com/@poisonmods
*└───────────━◈*

*┌─⊷☾* *SERVER* ☽︎━━◈
*┃▢* *🛑 RAM:* ${format(totalmem() - freemem())} / ${format(totalmem())}
*┃▢* *🔵 FreeRAM:* ${format(freemem())}

 ${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map((v) => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}
`;

  let pp = './fg_logo1.jpg';

  // Send the image file with the message as a single message
  await conn.sendFile(
    m.chat,
    pp,
    'menu.jpg',
    `
${infobt}
`.trim(),
    m
  );
};

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['info', 'infobot', 'botinfo'];

export default handler;
