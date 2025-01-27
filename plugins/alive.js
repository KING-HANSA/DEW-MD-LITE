const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "alive",
    desc: "To Check the bot online or no.",
    react: "💌",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const voice = {
    alive: ''
}

let aliveMessage = ` 
❤»»» *DEW-MD* »»»❤

👋𝗛𝗶⚡ ${pushname}!

 ╭─「𝐈 𝐚𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰」
│◈ яυηтιмє - ${runtime(process.uptime())}
│◈ σωηєя ηαмє - 𝐇𝐚𝐧𝐬𝐚 𝐃𝐞𝐰𝐦𝐢𝐧𝐚
│◈ σωηєя ηυмвєя - ${config.BOT_NUMBER}
╰──────────●●►
`
    
//*await conn.sendMessage(from, { audio: { url: voice.alive }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })
//*
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:aliveMessage},{quoted: mek})

}catch(e){
console.log(e)
reply(`αη єяяσя`)
}
})
