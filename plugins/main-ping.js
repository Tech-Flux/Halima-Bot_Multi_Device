
import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'

const emojis = ['👍', '👌', '😄', '🔥', '🎉', '🤔', '😊', '🙌', '👏', '🥳', '😃', '🤩', '🎊', '🙏', '🔝', '💯', '👀', '🎶', '✨', '🌟', '💥', '🍀', '🌈', '🌺', '🌼', '🌻', '🌞', '🌝', '🌙', '🌍', '🌈', '🔆', '🔅', '🔮', '📚', '💡', '💻', '⚡️', '🎵', '🎧', '📸', '📱', '💡', '💡', '🎮', '🍔', '🍕', '🍿', '🍩', '🍦', '🍭', '🍉', '🍓', '🍇', '🍌', '🍔', '🍕', '🍟', '🌭', '🍿', '🥤', '🍺', '🍷', '🎂', '🍪', '🍫', '🍬', '🍯', '🍡', '🍦', '🍨', '🍧', '🍚', '🍜', '🍣', '🍔', '🍕', '🍟', '🌭', '🍿', '🥤', '🍺', '🍷', '🎂', '🍪', '🍫', '🍬', '🍯', '🍡', '🍦', '🍨', '🍧', '🍚', '🍜', '🍣'];
let handler = async (m, { conn }) => {
  
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:");
          m.reply('*📡ʀᴜɴɪɴɢ ʀᴇsᴘᴏɴᴅ...*')
          m.reply(`${ssd}🟢 *Pong* : ${latensi.toFixed(4)} _ms_`);
          const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    m.react(randomEmoji); 
            });
}
handler.help = ['ping']
handler.tags = ['main']
handler.command = ['ping', 'speed']

export default handler
