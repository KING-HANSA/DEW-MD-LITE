const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
cmd({
    pattern: "song",
    desc: "To download songs.",
    react: "🎵",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
★彡[𝐊𝐈𝐍𝐆-𝐇𝐀𝐍𝐒𝐀-𝐋𝐈𝐓𝐄 𝐒𝐎𝐍𝐆 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑]彡★

╭─「 *ꜱᴏɴɢ ꜰᴏᴜɴᴅ!* 」
│◈ тιтℓє  ${data.title} 
│◈ ∂υяαтιση  ${data.timestamp}
│◈ νιєωѕ  ${data.views}
│◈ υρℓσα∂є∂ ση  ${data.ago}
│◈ ℓιηк  ${data.url}
╰──────────●●►
╭──────────●●►
│ © 𝐊𝐈𝐍𝐆 𝐇𝐀𝐍𝐒𝐀-𝐋𝐈𝐓𝐄 - 𝐌𝐃 
│ 🎧 *Enjoy the music brought to you by* *KING HANSA LITE*!
│ 💻 *GitHub* *github.com/KING-HANSA/KING-HANSA-LITE/* 
╰───────────●●►      
> *Created with ❤️ by Hansa Dewmina*  
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio message
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"*© KING-HANSA ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*"},{quoted:mek})

}catch(e){
console.log(e)
  reply('¢αηт ƒιη∂ α ѕσηg')
}
})

//====================video_dl=======================

cmd({
    pattern: "video",
    desc: "To download videos.",
    react: "🎥",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
★彡[𝐊𝐈𝐍𝐆-𝐇𝐀𝐍𝐒𝐀-𝐋𝐈𝐓𝐄 𝐕𝐈𝐃𝐄𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑]彡★

╭─「 *ᴠɪᴅᴇᴏ ꜰᴏᴜɴᴅ!*」
│◈ тιтℓє  ${data.title} 
│◈ ∂υяαтιση  ${data.timestamp}
│◈ νιєωѕ  ${data.views}
│◈ υρℓσα∂є∂ ση  ${data.ago}
│◈ ℓιηк  ${data.url}
╰──────────●●►
╭──────────●●►
│ © 𝐊𝐈𝐍𝐆 𝐇𝐀𝐍𝐒𝐀-𝐋𝐈𝐓𝐄 - 𝐌𝐃 
│ 🎬 *Enjoy the video brought to you by* *KING-HANSA-LITE*!
│ 💻 *GitHub* *github.com/KING-HANSA/KING-HANSA-LITE/* 
╰───────────●●►      
> *Created with ❤️ by Hansa Dewmina*
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video message
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"*©KING-HANSA-LITE ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*"},{quoted:mek})

}catch(e){
console.log(e)
  reply('¢αηт ƒιη∂ α νι∂єσ')
}
})
