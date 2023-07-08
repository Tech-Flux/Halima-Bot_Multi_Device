import fetch from 'node-fetch';

const handler = async (m, { conn }) => {
  try {
    const jsonData = await fetchSwahiliQuotes();
    if (jsonData) {
      const quote = pickRandom(jsonData)?.quoteSwahili;
      if (quote) {
        conn.sendMessage(m.chat, { text: quote, mentions: [m.sender] }, { quoted: m });
      } else {
        conn.reply(m.chat, '❌ Failed to fetch Swahili quote.', m);
      }
    } else {
      conn.reply(m.chat, '❌ Failed to fetch Swahili quote.', m);
    }
  } catch (error) {
    console.error(error);
    conn.reply(m.chat, '❌ Failed to fetch Swahili quote.', m);
  }
};

handler.help = ['swaquote'];
handler.tags = ['quotes'];
handler.command = /^swaquote|swaquotes$/i;

export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

async function fetchSwahiliQuotes() {
  try {
    const swahiliQuotes = [
  { quoteSwahili: "Akili ni mali" },
  { quoteSwahili: "Akiba haiozi" },
  { quoteSwahili: "Asiyesikia la mkuu huvunjika guu" },
  { quoteSwahili: "Asiyefunzwa na mamae, hufunzwa na ulimwengu" },
  { quoteSwahili: "Kikulacho ki nguoni mwako" },
  { quoteSwahili: "Mcheza kwao hutunzwa" },
  { quoteSwahili: "Mganga hajigangi" },
  { quoteSwahili: "Pole pole ndio mwendo" },
  { quoteSwahili: "Umoja ni nguvu, utengano ni udhaifu" },
  { quoteSwahili: "Usipopata taabu hujawa mtu" },
  { quoteSwahili: "Yaliyopita si ndwele, tugange yajayo" },
  // Add more quotes here...
  { quoteSwahili: "Afya ni mali" },
  { quoteSwahili: "Akufaye kwa dhiki ndiye rafiki wa kweli" },
  { quoteSwahili: "Bora uhai kuliko mali" },
  { quoteSwahili: "Chanda chema huvishwa pete" },
  { quoteSwahili: "Dunia duara, mzunguko wa maisha" },
  { quoteSwahili: "Fahali wawili wakipigana, nyasi huumia" },
  { quoteSwahili: "Haba na haba, hujaza kibaba" },
  { quoteSwahili: "Jitihada ni ufunguo wa mafanikio" },
  { quoteSwahili: "Kazi ni kazi" },
  { quoteSwahili: "Mali ya mjomba ni matatizo ya mjomba" },
  { quoteSwahili: "Yaliyopita si ndwele, tugange yajayo" }
    ];
    
    return swahiliQuotes;
  } catch (error) {
    console.error(error);
    return null;
  }
}
