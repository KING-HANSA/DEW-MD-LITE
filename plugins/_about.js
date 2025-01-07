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

╭─「 *ᴀʙᴏᴜᴛ* 」
│◈ *I AM KING-HANSA-LITE WHATSAPP BOT*
│◈ *CREATED BY DEWMINA-HD(HANSA DEWMINA)*..
╰──────────●●►
╭──────────●●►
│© 𝐊𝐈𝐍𝐆 𝐇𝐀𝐍𝐒𝐀-𝐋𝐈𝐓𝐄 - 𝐌𝐃 *
│🍁*GitHub*:*github.com/KING-HANSA/KING-HANSA-LITE*
╰───────────●●►
*THANKS FOR USING KING-HANSA WHATSAPP BOT MD*`
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:about},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})


