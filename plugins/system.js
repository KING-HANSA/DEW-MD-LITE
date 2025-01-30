/**
██████╗ ███████╗██╗    ██╗              ███╗   ███╗██████╗ 
██╔══██╗██╔════╝██║    ██║              ████╗ ████║██╔══██╗
██║  ██║█████╗  ██║ █╗ ██║    █████╗    ██╔████╔██║██║  ██║
██║  ██║██╔══╝  ██║███╗██║    ╚════╝    ██║╚██╔╝██║██║  ██║
██████╔╝███████╗╚███╔███╔╝              ██║ ╚═╝ ██║██████╔╝
╚═════╝ ╚══════╝ ╚══╝╚══╝               ╚═╝     ╚═╝╚═════╝ 
                                                                    
* Project name - DEW-MD 
* Author - Hansa Dewmina
* Team - Dew-coders 
* Version - vX

World best and powerfull whatsapp user bot in Sri lanka*/

const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    react: "♠️",
    alias: ["uptime","status","runtime"],
    desc: "cheack uptime",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let status = `*╭──────────●●►*
*DEW-MD UPTIME LIST↷*

*_UPTIME:➠_*  ${runtime(process.uptime())}

*_RAM USAGE:➠_* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB

*_HOSTNAME:➠_* ${os.hostname()}

*_OWNER:➠_* *HansaDewmina*
*╰──────────●●►*
`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:`${status}`},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
