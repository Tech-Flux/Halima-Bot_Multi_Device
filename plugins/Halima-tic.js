let activeGames = {};

function createGame(chatId) {
  const numberToGuess = Math.floor(Math.random() * 10);
  activeGames[chatId] = {
    numberToGuess,
    attempts: 0,
    gameOver: false
  };
}

let handler = async (m, { conn, text }) => {
  let chatId = m.chat;

  if (!activeGames[chatId]) {
    createGame(chatId);
    conn.reply(m.chat, '*Guess game started!🎮*\n\n*Guess number between 0 - 9💗*', m);
    m.react('🎮')
  }

  let game = activeGames[chatId];
  let guess = parseInt(text);

  if (isNaN(guess)) {
    conn.reply(m.chat, '*Please enter a valid number.🎮*', m);
    m.react('❌')
    return;
  }

  if (guess < 0 || guess > 9) {
    conn.reply(m.chat, '*Give me number between 0 - 9*', m);
    return;
  }

  if (game.gameOver) {
    createGame(chatId);
    conn.reply(m.chat, '*Another guess game started!🎮*\n\n*Guess number between 0 - 9💗*', m);
    return;
  }

  game.attempts++;

  if (guess === game.numberToGuess) {
    conn.reply(m.chat, `*Congratulations!🥳🎉 with ${game.attempts} attempt😂*.`, m);
    m.react('🎉')
    game.gameOver = true;
    return;
  }

  if (guess < game.numberToGuess) {
    conn.reply(m.chat, '*Try a higher number.🧕*', m);
    m.react('⬆️')
  } else {
    conn.reply(m.chat, '*Try a lower number.🧕*', m);
    m.react('⬇️')
  }
}

handler.help = ['guess']
handler.tags = ['game']
handler.command = ['guess']

export default handler
