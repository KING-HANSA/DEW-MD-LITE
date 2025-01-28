const {readEnv} = require('../lib/database')
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
const config = await readEnv();
const voice = {
    alive: ''
}

let aliveMessage = ` ❁ ════ ❃•◯•❃ ════ ❁

*⇆ ʜɪɪ ᴍʏ ᴅᴇᴀʀ ғʀɪᴇɴᴅ ⇆*

     *${pushname}*
     
❁ ════ ❃•◯•❃ ════ ❁

┏━━━━━━━━━━━━━━━━━━━━━━━━━━
      *I'AM ALIVE NOW*
┗━━━━━━━━━━━━━━━━━━━━━━━━━━
`
    
//*await conn.sendMessage(from, { audio: { url: voice.alive }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })
//*
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:aliveMessage},{quoted: mek})

}catch(e){
console.log(e)
reply(`කිසියම් දෝශයක් සිදුවිය`)
}
})
