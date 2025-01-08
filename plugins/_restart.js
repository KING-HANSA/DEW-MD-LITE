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
const {sleep} = require('../lib/functions')

cmd({
    pattern: "restart",
    desc: "To restart the bot",
    react: "💢",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    if(!isOwner)return
const {exec} = require("child_process")
reply("restarting DEW-MD-LITE 🍓...")
await sleep(1500)
exec("pm2 restart all")
}catch(e){
console.log(e)
reply(`${e}`)
}
})
