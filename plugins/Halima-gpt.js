const readline = require('readline');
const { ChatGPT } = require('openai'); // You need the 'openai' package for this approach

// Replace 'your_openai_api_key' with your actual OpenAI API key
const OPENAI_API_KEY = 'your_openai_api_key';

const gpt = new ChatGPT(OPENAI_API_KEY);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function handleGreeting() {
  console.log('ChatGPT: Hello! How can I assist you today? (Type "exit" to end the chat)');
}

async function handleIACommand(input) {
  if (!input) {
    throw 'Give me some text to search.';
  }

  const response = await gpt.complete(input);
  console.log('ChatGPT:', response.choices[0].message.content);
}

const commandHandler = {
  greeting: handleGreeting,
  ia: handleIACommand,
  default: handleIACommand, // Fallback to 'ia' command handler for any unrecognized command
};

function getInput() {
  return new Promise((resolve) => {
    rl.question('You: ', (input) => {
      resolve(input);
    });
  });
}

async function chat() {
  commandHandler.greeting();

  while (true) {
    const userInput = await getInput();
    const [command, ...args] = userInput.toLowerCase().trim().split(' ');
    const handler = commandHandler[command] || commandHandler.default;

    try {
      await handler(args.join(' '));
    } catch (error) {
      console.error(error);
    }
  }
}

// Add command-specific properties for the 'ia' command
handleIACommand.help = ['ia <text>'];
handleIACommand.tags = ['tools'];
handleIACommand.command = ['ia', 'ai', 'chatgpt', 'openai', 'gpt'];

chat();
