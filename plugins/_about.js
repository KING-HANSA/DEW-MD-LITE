const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
pattern: "about",
desc: "To get the bot informations.",
react: "ℹ️",
category: "main",
filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let about = `
👋*HELLOW THEIR* ${senderNumber}

╭────《 *About* 》
│ ╭───────────◆
│ │ *I AM KING-HANSA-LITE WHATSAPP BOT*
│ │ *CREATED BY DEWMINA-HD(HANSA DEWMINA)*
│ ╰───────────◆
╰───────────⊷

*THANKS FOR USING DEW-MD WHATSAPP BOT MD*
*DEW - MD LITE*
> Dew-Coders™`
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:about},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})


