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
let downoadUrl = down.dl_url

//=====send audio document message==========================================
await conn.sendMessage(from, {audio: {url:downloadUrl},mimetype:"audio/mpeg}"},{quoted:mek})
await conn.sendMessage(from, {document: {url:downloadUrl},mimetype:"audio/mp3}",fileName:data.tittle + ".mp3",caption:"POWER BY DILISHA GIMSHAN 😘"},{quoted:mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//================video-dl=========================================

cmd({
    pattern: "video",
    desc: "download videos",
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
🤙👉 *DILISHA-MD VIDEO DOWNLOADER* 👈🤌

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
//download video

let down = await fg.ytv(url)
let downoadUrl = down.dl_url

//=====send video message==========================================
await conn.sendMessage(from, {video: {url:downloadUrl},mimetype:"video/mp4}"},{quoted:mek})
await conn.sendMessage(from, {document: {url:downloadUrl},mimetype:"video/mp4}",fileName:data.tittle + ".mp4",caption:"POWER BY DILISHA GIMSHAN 😘"},{quoted:mek})

  
}catch(e){
console.log(e)
reply(`${e}`)
}
})
