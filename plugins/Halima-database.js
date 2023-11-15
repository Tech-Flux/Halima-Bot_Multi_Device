let botname = 'Halima'
let ownername = 'Abdul'
let handler = async (m) => {
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    m.reply(`*_I have recorded only ${totalreg} profiles in the Database_*`)
}
handler.help = ['database', 'user']
handler.tags = ['main']
handler.command = /^(database|db|user)$/i
export default handler