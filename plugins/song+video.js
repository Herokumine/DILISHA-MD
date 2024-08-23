const {cmd , commands} = require('../command')
const fg = require('api-dulux')
const yts = require('yt-search')


cmd({
    pattern: "song",
    desc: "download songs",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me url or title")
const search = yts(q)
const = search.videos[0];
const url = data.url

let desc = `
================================================
♠♠♠♠♠♠♠♠♠♦♦♦♦♦♦♦♠♠♠♠♠♠♠♠♠
🤙👉 *DILISHA-MD SONG DOWNLOADER* 👈🤌

> tittle: ${data.title}
> description: ${data.description}
> time: ${data.timestamp}
> ago: ${data.ago}
> views: ${data.views}

👉👉👉MADE BY. DILISHA .👈👈👈
♠♠♠♠♠♠♠♠♦♦♦♦♦♦♦♦♦♠♠♠♠♠♠♠♠
=================================================
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{qouted:mek});
//download audio

let down = await fg.yta(url)
let downoadUrl = 


  
}catch(e){
console.log(e)
reply(`${e}`)
}
})
