
/**
██████╗ ███████╗██╗    ██╗    ███╗   ███╗██████╗     ██╗     ██╗████████╗███████╗
██╔══██╗██╔════╝██║    ██║    ████╗ ████║██╔══██╗    ██║     ██║╚══██╔══╝██╔════╝
██║  ██║█████╗  ██║ █╗ ██║    ██╔████╔██║██║  ██║    ██║     ██║   ██║   █████╗  
██║  ██║██╔══╝  ██║███╗██║    ██║╚██╔╝██║██║  ██║    ██║     ██║   ██║   ██╔══╝  
██████╔╝███████╗╚███╔███╔╝    ██║ ╚═╝ ██║██████╔╝    ███████╗██║   ██║   ███████╗
╚═════╝ ╚══════╝ ╚══╝╚══╝     ╚═╝     ╚═╝╚═════╝     ╚══════╝╚═╝   ╚═╝   ╚══════╝                                                                            
         
* Project name - DEW-MD-LITE 
* Author - Hansa Dewmina
* Team - Dewminacoders 
* Version - vX

World best and powerfull whatsapp user bot in Sri lanka*/

const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "මෙනු",
    desc: "මෙනු එකට යන්න",
    react: "🍁",
    category: "sinhala",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
const voice = {
    menu: 'media/media_menu.mp3'
}

let menu = {
sinhala: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `│ ${commands[i].pattern}\n`;
 }
}

let madeMenu = `
👋 *හායි ලස්සන ලමයෝ,* ${pushname}!
╭────《 *DEW-MD* 》
│ ╭───────────◆
│ │ Owner Name: Hansa
│ │ Owner Number: ${config.BOT_NUMBER}
│ │ Uptime: ${runtime(process.uptime())}
│ ╰───────────◆
╰───────────⊷
╭────❏ *සින්හල* ❏
${menu.sinhala}╰━━━━━━━━━──⊷

*DEW - MD LITE*
> Dew-Coders™
`

await conn.sendMessage(from, { audio: { url: voice.menu }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })

return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:madeMenu},{quoted: mek})
}catch(e){
console.log(e)
reply(`𝔼𝕣𝕣𝕣𝕠𝕣`)
}
})
