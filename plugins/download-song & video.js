
const {cmd , commands} = require('../command')
const fg= require('api-dylux')
const yts= require('yt-search')


cmd({
    pattern: "audio",
    desc: "download audio",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply ("Give me URL or Title")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
    ⬇️ *BRANDED MD AUDIO DOWNLOADER* ⬇️

title:  ${data.title}
description: ${data.description}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

MADE BY *MR FADI*
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});
    
//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio + document message
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
 await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title +".mp3", caption: "*Made By > Mr Fadi*"},{quoted:mek})



    
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//===========video-dl========


cmd({
    pattern: "video",
    desc: "download video",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply ("Give me URL or Title")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
    ⬇️ *BRANDED MD VIDEO DOWNLOADER* ⬇️

Title:  ${data.title}

Description: ${data.description}

Time: ${data.timestamp}

ago: ${data.ago}

views: ${data.views}


Join My Channel For Updates

 _https://whatsapp.com/channel/0029VatIItrD38CVaysgC42O_


> //POWERED BY *MR FADI* 
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});
    
//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video + document message
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
 await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title +".mp4",caption: "*Made By > Mr Fadi*"},{quoted:mek})



    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
