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
cmd({
    pattern: "about",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let madeMenu = `❁ ════ ❃•⇆•❃ ════ ❁

*👋 HELLO ${pushname}*\n\n *I AM DEW-MD WHATSAPP BOT*\n\n *CREATED BY DEW CODERS*\n\n\n *THANK YOU FOR USING BOT.😊*

❁ ════ ❃•⇆•❃ ════ ❁

> *POWERD BY DEW-MD*

╰━❁ ═══ ❃•⇆•❃ ═══ ❁━╯
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
