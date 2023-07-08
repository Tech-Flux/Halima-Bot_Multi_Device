const emojis = ['👍', '👌', '😄', '🔥', '🎉', '🤔', '😊', '🙌', '👏', '🥳', '😃', '🤩', '🎊', '🙏', '🔝', '💯', '👀', '🎶', '✨', '🌟', '💥', '🍀', '🌈', '🌺', '🌼', '🌻', '🌞', '🌝', '🌙', '🌍', '🌈', '🔆', '🔅', '🔮', '📚', '💡', '💻', '⚡️', '🎵', '🎧', '📸', '📱', '💡', '💡', '🎮', '🍔', '🍕', '🍿', '🍩', '🍦', '🍭', '🍉', '🍓', '🍇', '🍌', '🍔', '🍕', '🍟', '🌭', '🍿', '🥤', '🍺', '🍷', '🎂', '🍪', '🍫', '🍬', '🍯', '🍡', '🍦', '🍨', '🍧', '🍚', '🍜', '🍣', '🍔', '🍕', '🍟', '🌭', '🍿', '🥤', '🍺', '🍷', '🎂', '🍪', '🍫', '🍬', '🍯', '🍡', '🍦', '🍨', '🍧', '🍚', '🍜', '🍣'];
let handler = async (m, { conn, command }) => {
    // Generate random numbers like a dice roll
    const getRandomNumber = () => Math.floor(Math.random() * 6) + 1;
    const randomNum = getRandomNumber();
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    m.react(randomEmoji);
    // Send back the random number as a response
    conn.reply(m.chat, `⚀ ⚁ ⚂ ⚃ ⚄ ⚅\n\n🎲 *${command.toUpperCase()}*\n\n🎲 You rolled ➪ *${randomNum}* 🙃`, m)
  
   
}
handler.help = ['dice1']
handler.tags = ['game']
handler.command = ['dice1']

export default handler
