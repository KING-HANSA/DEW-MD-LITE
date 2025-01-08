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
    alive: 'media/media_alive.mp3'
}

let aliveMessage = ` 
👋*HI* ${pushname}

╭────《 *I AM ALIVE* 》
│ ╭───────────◆
│ │ Owner Name: Hansa
│ │ Owner Number:${config.BOT_NUMBER}
│ │ Uptime:${runtime(process.uptime())}
│ │ Host Name:${os.hostname()}
│ │ RAM Usage:${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│ ╰───────────◆
╰───────────⊷

*DEW - MD LITE*
> Dew-Coders™`
    
await conn.sendMessage(from, { audio: { url: voice.alive }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })

return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:aliveMessage},{quoted: mek})

}catch(e){
console.log(e)
reply(`ALIVE MAGAGE WORKING ON WHATSAPP ✔`)
}
})



