import express from 'express'
import { createServer } from 'http'
import path from 'path'
import { Socket } from 'socket.io'
import { toBuffer } from 'qrcode'
import fetch from 'node-fetch'

function connect(conn, PORT) {
    let app = global.app = express()
    console.log(app)
    let server = global.server = createServer(app)
  
  app.get('/', function (req, res) {
  res.send(`<!DOCTYPE html>
    <html>
    <head>
    <style>
        body {
            background-image: url('https://media.giphy.com/media/3o7WToRQwwwuEIcsb6/giphy.gif');
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-position: center;
            background-size: cover;
        }
    </style>
    </head>
    <body>
        <h1 align="center"; style="color: white">𝗛𝗔𝗟𝗜𝗠𝗔-𝗕𝗢𝗧 𝗕𝗬 𝗔𝗕𝗗𝗨𝗟𝗥𝗔𝗛𝗠𝗔𝗡</h1>
        <p align="center">
  <a href="https://github.com/DenverCoder1/readme-typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Time+New+Roman&color=cyan&size=25&center=true&vCenter=true&width=600&height=100&lines=Halima+Bot+Running...&hearts;++;"></a>
</p>
    </body>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    <p align="center">
  <a href="https://github.com/DenverCoder1/readme-typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Time+New+Roman&color=cyan&size=25&center=true&vCenter=true&width=600&height=100&lines=Thank+You+for+Using&hearts;++;"></a>
</p>
    </html>`);
});

    // app.use(express.static(path.join(__dirname, 'views')))
    let _qr = 'invalid'

    conn.ev.on('connection.update', function appQR({ qr }) {
        if (qr) _qr = qr
    })

    app.use(async (req, res) => {
        res.setHeader('content-type', 'image/png')
        res.end(await toBuffer(_qr))
    })

    // let io = new Socket(server)
    // io.on('connection', socket => {
    //     let { unpipeEmit } = pipeEmit(conn, socket, 'conn-')
    //     socket.on('disconnect', unpipeEmit)
    // })

    server.listen(PORT, () => {
        console.log('App listened on port', PORT)
        if (opts['keepalive']) keepAlive()
    })
}

function pipeEmit(event, event2, prefix = '') {
    let old = event.emit
    event.emit = function (event, ...args) {
        old.emit(event, ...args)
        event2.emit(prefix + event, ...args)
    }
    return {
        unpipeEmit() {
            event.emit = old
        }
    }
}

function keepAlive() {
    const url = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`
    if (/(\/\/|\.)undefined\./.test(url)) return
    setInterval(() => {
        fetch(url).catch(console.error)
    }, 5 * 1000 * 60)
}


export default connect