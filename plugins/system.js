const config = require('../config')
const {cmd , commands} = require('../command')
const os = require(require("os")
const {runtime} = requre('../lib/functions')
cmd({
    pattern: "system",
    alias: [" status","botinfo"],
    desc: "Check up time , ram usage and more",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `
==========================================
😘 Uptime:😀  ${runtime(process.uptime())}
😎 Ram usage:👌👉 ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
♠ HostName:🤙👉 ${os.hostname()}
😈 Owner:🤙👉♦.DILISHA GIMSHAN.♦👈✌️
==========================================
`
return reply(`${statues}`)
  
}catch(e){
console.log(e)
reply(`${e}`)
  
