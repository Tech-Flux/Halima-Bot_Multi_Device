import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['254798708444', 'Abdul ❤️🫶', true],
  // ['254787 002739', 'Alchemist']
]

global.mods = ['254798708444']
global.prems = ['254798708444']
global.APIs = {
  xteam: 'https://api.xteam.xyz',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = {
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a',
  'https://api-fgmods.ddns.net': 'x7ZtRLdB'
}

global.packname = 'Made With ❤️'
global.author = 'Abdulrahman'
global.fgig = '▢ Follow me on Instagram\nhttps://www.instagram.com/noo.i.e\n'
global.dygp = 'https://chat.whatsapp.com/L3OL4BaN1YN07dE9rDPomh'
global.rpl = 'https://chat.whatsapp.com/L3OL4BaN1YN07dE9rDPomh'
global.fgsc = 'https://github.com/x-poison'
global.fgyt = 'https://youtube.com/@poisonmods'
global.fglog = 'https://i.imgur.com/EJgRBnS.jpg'

global.wait = '*⌛ _loading..._*\n*▰▰▰▰▰▰▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌'
global.xmoji = '🔥'

global.multiplier = 69
global.maxwarn = '3'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})