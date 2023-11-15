console.log("started...")
import { join, dirname } from 'path'
import { createRequire } from 'module';
import { fileURLToPath } from 'url'
import { setupMaster, fork } from 'cluster'
import { watchFile, unwatchFile } from 'fs'
import cfonts from 'cfonts';
import { createInterface } from 'readline'
import yargs from 'yargs'

// https://stackoverflow.com/a/50052194
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname) // Bring in the ability to create the 'require' method
const { name, author } = require(join(__dirname, './package.json')) // https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-modules-node-js/
const { say } = cfonts
const rl = createInterface(process.stdin, process.stdout)

function _0x13f7(){var _0xb892b5=['ahman','tiny','BOT','40PRmgmy','48DWlAfc','661014pDXMcw','red','HALIMA\x20-\x20\x20','4724952KfqxOF','center','6487870eQaQri','539343HwHwpD','magenta','50241HvJMek','484720kpGLtg','By\x20\x0aAbdulr','9614815FTClzz'];_0x13f7=function(){return _0xb892b5;};return _0x13f7();}function _0x5368(_0x3933dc,_0x5d1642){var _0x30b495=_0x13f7();return _0x5368=function(_0x3e580c,_0x50536c){_0x3e580c=_0x3e580c-(-0x1e32+-0x258c*0x1+0x450d);var _0x22389c=_0x30b495[_0x3e580c];return _0x22389c;},_0x5368(_0x3933dc,_0x5d1642);}var _0x521232=_0x5368;(function(_0x419cd7,_0x21542b){var _0x2f68e5=_0x5368,_0x215916=_0x419cd7();while(!![]){try{var _0x1c4114=-parseInt(_0x2f68e5(0x150))/(0x782+0xbab+-0x1*0x132c)+parseInt(_0x2f68e5(0x156))/(-0x2055+-0xcb5*-0x2+-0x3*-0x24f)*(parseInt(_0x2f68e5(0x14f))/(-0x1dc4+0x206c+-0x2a5))+parseInt(_0x2f68e5(0x15b))/(0xbf0+-0x187f+-0x6f*-0x1d)+-parseInt(_0x2f68e5(0x15d))/(0x1578+0x1d6b*-0x1+0x7f8)+parseInt(_0x2f68e5(0x158))/(-0xbd9+-0x1*0x2629+0x3208)+parseInt(_0x2f68e5(0x152))/(-0x15d*0x1+0x905+-0x7a1)+parseInt(_0x2f68e5(0x157))/(0x11*0x28+0x5*-0x16f+-0x48b*-0x1)*(-parseInt(_0x2f68e5(0x15e))/(0x1*0x4d4+-0x790+0x1*0x2c5));if(_0x1c4114===_0x21542b)break;else _0x215916['push'](_0x215916['shift']());}catch(_0x20bad6){_0x215916['push'](_0x215916['shift']());}}}(_0x13f7,-0x15*0x99c3+0x158114+0x4339f),say(_0x521232(0x15a)+_0x521232(0x155),{'font':_0x521232(0x154),'align':_0x521232(0x15c),'gradient':[_0x521232(0x159),_0x521232(0x15f)]}),say(_0x521232(0x151)+_0x521232(0x153),{'font':_0x521232(0x154),'align':_0x521232(0x15c),'gradient':[_0x521232(0x159),_0x521232(0x15f)]}));

var isRunning = false
/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start(file) {
  if (isRunning) return
  isRunning = true
  let args = [join(__dirname, file), ...process.argv.slice(2)]
  say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  setupMaster({
    exec: args[0],
    args: args.slice(1),
  })
  let p = fork()
  p.on('message', data => {
    console.log('[RECEIVED]', data)
    switch (data) {
      case 'reset':
        p.process.kill()
        isRunning = false
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  //---v
  p.on('exit', (_, code) => {
    isRunning = false
    console.error('❎ An unexpected error occurred:', code)
    if (code === 0) return
    watchFile(args[0], () => {
      unwatchFile(args[0])
      start(file)
    })
  })
  //----
let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
  if (!opts['test'])
    if (!rl.listenerCount()) rl.on('line', line => {
      p.emit('message', line.trim())
    })
  // console.log(p)
  }

start('main.js')
