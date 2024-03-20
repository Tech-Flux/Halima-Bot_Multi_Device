import fetch from 'node-fetch';

const emojis = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
  '😍', '🥰', '😘', '😗', '😋', '😛', '😜', '🤪', '😝', '🤑',
  '🤗', '🤭', '🤫', '🤔', '🤐', '🤨', '😐', '😑', '😶', '😏',
  '😒', '🙄', '😬', '🤥', '😌', '😔', '😪', '🤤', '😴', '😷',
  '🤒', '🤕', '🤢', '🤮', '🤧', '🥵', '🥶', '🥴', '😵', '🤯',
  '🤠', '🥳', '😎', '🤓', '🧐', '😕', '😟', '🙁', '😮', '😯',
  '😲', '😳', '🥺', '😦', '😧', '😨', '😰', '😥', '😢', '😭',
  '😱', '😖', '😣', '😞', '😓', '😩', '😫', '😤', '😡', '😠',
  '🤬', '😈', '👿', '💀', '☠️', '💩', '🤡', '👹', '👺', '👻',
  '👽', '👾', '🤖', '🎃', '😺', '😸', '😹', '😻', '😼', '😽',
  '🙀', '😿', '😾', '👐', '🙌', '👏', '🤝', '👍', '👎', '👊',
  '✊', '🤛', '🤜', '🤞', '✌️', '🤟', '🤘', '👌', '👈', '👉',
  '👆', '👇', '☝️', '✋', '🤚', '🖐️', '🖖', '👋', '🤙', '💪',
  '🦵', '🦶', '🖕', '🙏', '🦰', '🦱', '🦲', '🦳', '🦴', '🦷',
  '👶', '👧', '🧒', '👦', '👩', '🧑', '👨', '👵', '🧓', '👴',
  '👮', '🕵️', '👷', '💂', '👸', '👳', '👲', '🧕', '🤵', '👰',
  '🤰', '🤱', '👼', '🎅', '🤶', '🦸', '🦹', '🧙', '🧚', '🧛',
  '🧜', '🧝', '🧞', '🧟', '💆', '💇', '🚶', '🧍', '🧎', '🧑‍🦯',
  '👨‍🦯', '👩‍🦯', '🧑‍🦼', '👨‍🦼', '👩‍🦼', '🧑‍🦽', '👨‍🦽', '👩‍🦽', '🏃', '💃',
  '🕺', '🕴️', '🧖', '🧗', '🤺', '🏇', '⛷️', '🏂', '🏌️', '🏄',
  '🚣', '🏊', '⛹️', '🏋️', '🚴', '🚵', '🤸', '🤼', '🤽', '🤾',
  '🤹', '🧘', '🛀', '🛌', '🕯️', '🎖️', '🏆', '🏅', '🥇', '🥈',
  '🥉', '🎗️', '🏵️', '🎫', '🎟️', '🎪', '🤹‍♂️', '🤹‍♀️', '🎭', '🩰',
  '🎨', '🎬', '🎤', '🎧', '🎼', '🎹', '🥁', '🎷', '🎺', '🎸',
  '🎻', '🎲', '🧩', '🎮', '🎳', '🎯', '🎰', '🎳', '🏈', '🏀',
  '⚽', '⚾', '🥎', '🏐', '🏉', '🎾', '🥏', '🎱', '🏓', '🏸',
  '🏒', '🏑', '🥍', '🏏', '⛳', '🥊', '🥋', '🥅', '⛸️', '🎣',
  '🤿', '🎽', '🛹', '🛼', '🛶', '🎿', '🛷', '🪂', '🏹', '🎯'];

let handler = async function (m, { conn, text, usedPrefix }) {
  let m2 = `
  ≡ *Welcome to Download Menu* ≡

  ▢ *Enjoy Downloading*  

┌─⊷☾ ᴅᴏᴡɴʟᴏᴀᴅs ☽━━◈
┃▢➥ .facebook
┃▢➥ .gdrive
┃▢➥ .gitclone
┃▢➥ .mediafire
┃▢➥ .play
┃▢➥ .tiktok
┃▢➥ .twitter
┃▢➥ .ytmp3
┃▢➥ .ytsearch
┃▢➥ .ytmp4
┃▢➥ .instagram
└───────────◈\n*ᴍᴀᴅᴇ ᴡɪᴛʜ ❤️ ʙʏ ᴀʙᴅᴜʟ*
  `;

  let pp = './src/download.jpg';
  conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl);
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    m.react(randomEmoji);
 // conn.sendReadReceipt(m.chat, m.key); // Mark the message as read
 // conn.toggleDisappearingMessages(m.chat, 0); // Disable disappearing messages
  //conn.react(m.chat, m.key.id, '👨‍💻'); // React to the message with the "👨‍💻" emoji
};

handler.all = true; // Set 'all' property to true to react to every message

handler.help = ['downloadmenu'];
handler.tags = ['main1'];
handler.command = ['downloadmenu'];

export default handler;
