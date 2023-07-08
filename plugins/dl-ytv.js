import fg from 'api-dylux';
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';

let limit = 350;
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
    if (!args || !args[0]) throw `✳️ Example:\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`;
    if (!args[0].match(/youtu/gi)) throw `❎ Verify that the YouTube link`;

    let chat = global.db.data.chats[m.chat];
    m.react(rwait);

    try {
        let q = args[1] || '720p';
        let v = args[0];

        const yt = await youtubedl(v).catch(async () => await youtubedlv2(v)).catch(async () => await youtubedlv3(v));
        const dl_url = await yt.video[q].download();
        const title = await yt.title;
        const size = await yt.video[q].fileSizeH;

        if (size.split('MB')[0] >= limit) {
            return m.reply(`≡ *ʜᴀʟɪᴍᴀ ʏᴏᴜᴛᴜʙᴇ ᴅʟ*\n\n▢ *⚖️Size*: ${size}\n▢ *🎞️Quality*: ${q}\n\n▢ *The file exceeds the download limit of ${limit} MB*`);
          m.react('⚠️');
        }

        conn.sendFile(m.chat, dl_url, title + '.mp4', `
 *┌─⊷☾* *ʜᴀʟɪᴍᴀ ʏᴏᴜᴛᴜʙᴇ ᴅʟ* ☽︎━━◈
*┃▢📌Title:* ${title}
*┃▢📟Ext:* mp4
*┃▢🎞️Quality:* ${q}
*┃▢⚖️Weight:* ${size}
╰━━━━━❰ʜᴀʟɪᴍᴀ❤️❱━━━━⬣
`.trim(), m, false);
        
        m.react(done);
    } catch {
        m.reply(`✳️ Error downloading video. Please try another video.`);
    }
};

handler.help = ['ytmp4'];
handler.tags = ['dl'];
handler.command = ['ytmp4', 'dlmp4'];
handler.diamond = true;

export default handler;
