let logogit;
import axios from 'axios'
var handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, '*⚠️ Enter the username*', m)

  await m.reply('*sᴛᴀʟᴋɪɴɢ...✅*')
  m.react('◻️')
  let request = await githubstalk(text) 
    let { username, following, followers, type, bio, company, blog, location, email, public_repo, public_gists, profile_pic } = request
    let thumb = await (profile_pic)
    let hasil = `
*┌─⊷☾* *ɢɪᴛʜᴜʙ sᴛᴀʟᴋ* ☽︎━━◈
*┃▢* *Username*: ${username}
*┃▢* *Account Bio*: ${bio}
*┃▢* *Company Name*: ${company}
*┃▢* *User Email:* ${email}
*┃▢* *Blogspot:* ${blog}
*┃▢* *Public Repos:* ${public_repo}
*┃▢* *Private Repos:* ${public_gists}
*┃▢* *Followers:* ${followers}
*┃▢* *Following:* ${following}
*┃▢* *Location:* ${location}
*┃▢* *Account Type:* ${type}
*└──✪ Halima ┃ ᴮᴼᵀ ✪──*`
    let logogit = './Logogit.png'
    conn.sendFile(m.chat, logogit, 'githubstalk.jpg', hasil, m)
    m.react('✅')
}
handler.help = ['githubstalk'].map(v => v + '')
handler.tags = ['internet']
handler.command = /^(githubstalk|gitstalk)$/i

export default handler

async function githubstalk(user) {
    return new Promise((resolve, reject) => {
        axios.get('https://api.github.com/users/'+user)
        .then(({ data }) => {
            let hasil = {
                username: data.login,
                nickname: data.name,
                bio: data.bio,
                id: data.id,
                nodeId: data.node_id,
                profile_pic: data.avatar_url,
                url: data.html_url,
                type: data.type,
                admin: data.site_admin,
                company: data.company,
                blog: data.blog,
                location: data.location,
                email: data.email,
                public_repo: data.public_repos,
                public_gists: data.public_gists,
                followers: data.followers,
                following: data.following,
                ceated_at: data.created_at,
                updated_at: data.updated_at
            }
            resolve(hasil)
        })
    })
}

     
   // conn.sendFile(m.chat, pp, 'menu.jpg', text.trim(), m, null)