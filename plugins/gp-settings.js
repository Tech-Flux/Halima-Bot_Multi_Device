let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'open': 'not_announcement',
        'close': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
*✳️ Choose an option:*
  *▢ ${usedPrefix + command} cclose*
  *▢ ${usedPrefix + command} oopen*
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group']
handler.tags = ['group']
handler.command = ['group', 'grupo'] 
handler.admin = true
handler.botAdmin = true

export default handler
