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
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "ai",
    desc: "Ai chat.",
    react: "🧠",
    category: "misc",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let data = await fetchJson(`https://chatgptforprabath-md.vercel.app/api/gptv1?q=${q}`)
return reply(`${data.data}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})
