const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "menu",
    desc: "To get the menu.",
    react: "🍁",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
const voice = {
    menu: 'media/media_menu.mp3'
}

let menu = {
main: '',
download: '',
group: '',
owner: '',
misc: '',
search: '',
fun: '',
anime: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `│ ${commands[i].pattern}\n`;
 }
}

let madeMenu = `
👋 *HELLO,* ${pushname}!
╭────《 𝐃𝐄𝐖-𝐌𝐃 》──⊷
│ ╭───────────◆
│ │ Owner Name: Hansa
│ │ Owner Number: ${config.BOT_NUMBER}
│ │ Uptime: ${runtime(process.uptime())}
│ ╰───────────◆
╰───────────⊷
╭────❏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ❏
${menu.download}╰━━━━━━━━━──⊷
╭────❏ ɢᴇɴᴇʀᴀʟ ❏
${menu.main}╰━━━━━━━━━──⊷
╭────❏ ꜰᴜɴ ❏
${menu.fun}╰━━━━━━━━━──⊷
╭────❏ ɢʀᴏᴜᴘ ❏
${menu.group}╰━━━━━━━━━──⊷
╭────❏ ᴏᴡɴᴇʀ ❏
${menu.owner}╰━━━━━━━━━──⊷
╭────❏ ᴍɪꜱᴄ ❏
${menu.misc}╰━━━━━━━━━──⊷
╭────❏ ꜱᴇᴀʀᴄʜ ❏
${menu.search}╰━━━━━━━━━──⊷
╭────❏ ᴡᴇᴇʙ ❏
${menu.anime}╰━━━━━━━━━──⊷

*DEW - MD LITE*
> Dew-Coders™
> Hansa Dewmina 2025
`

await conn.sendMessage(from, { audio: { url: voice.menu }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })

return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:madeMenu},{quoted: mek})
}catch(e){
console.log(e)
reply(`𝔼𝕣𝕣𝕣𝕠𝕣`)
}
})


