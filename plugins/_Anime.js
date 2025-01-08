const axios = require('axios');
const { cmd, commands } = require('../command');

cmd({
pattern: "waifu",
desc: "Fetch a random waifu girl image.",
category: "anime",
react: "🍓",
filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {
const apiUrl = `https://api.waifu.pics/nsfw/waifu`;
const response = await axios.get(apiUrl);
const data = response.data;

await conn.sendMessage(from, { image: { url: data.url }, caption: '🍁 *Random waifu Girl Image* 🍓\n> KING-HANSA-LITE' }, { quoted: mek });
} catch (e) {
console.log(e);
reply(`Error fetching anime girl image: ${e.message}`);
}
});

//==========================================
cmd({
pattern: "blowjob",
desc: "Fetch a random blowjob girl image.",
category: "anime",
react: "🍓",
filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {
const apiUrl = `https://api.waifu.pics/nsfw/blowjob`;
const response = await axios.get(apiUrl);
const data = response.data;

await conn.sendMessage(from, { image: { url: data.url }, caption: '🍁 *Random blowjob Girl Image* 🍓\n> KING-HANSA-LITE' }, { quoted: mek });
} catch (e) {
console.log(e);
reply(`Error fetching anime girl image: ${e.message}`);
}
});
//====================================================
cmd({
pattern: "animegirl",
desc: "Fetch a random anime girl image.",
category: "anime",
react: "👧",
filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {
const apiUrl = `https://api.waifu.pics/sfw/waifu`;
const response = await axios.get(apiUrl);
const data = response.data;

await conn.sendMessage(from, { image: { url: data.url }, caption: '🍁 *Random Anime Girl Image* 🍓\n> KING-HANSA-LITE' }, { quoted: mek });
} catch (e) {
console.log(e);
reply(`Error fetching anime girl image: ${e.message}`);
}
});
//=======================================================
cmd({
pattern: "kill",
desc: "Fetch a random anime kill image.",
category: "anime",
react: "🍒",
filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {
const apiUrl = `https://api.waifu.pics/sfw/kill`;
const response = await axios.get(apiUrl);
const data = response.data;

await conn.sendMessage(from, { image: { url: data.url }, caption: '🍁 *Random Anime kill Image* 🍓\n> KING-HANSA-LITE' }, { quoted: mek });
} catch (e) {
console.log(e);
reply(`Error fetching anime kill image: ${e.message}`);
}
});
//==========================================================
cmd({
pattern: "kiss",
desc: "Fetch a random anime kiss image.",
category: "misc",
react: "🍒",
filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {
const apiUrl = `https://api.waifu.pics/sfw/kiss`;
const response = await axios.get(apiUrl);
const data = response.data;

await conn.sendMessage(from, { image: { url: data.url }, caption: '🍁 *Random Anime kiss* 🍓\n> KING-HANSA-LITE' }, { quoted: mek });
} catch (e) {
console.log(e);
reply(`Error fetching anime kiss image: ${e.message}`);
}
});
//==========================================================
cmd({
pattern: "pat",
desc: "Fetch a random anime pat.",
category: "misc",
react: "🍒",
filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {
const apiUrl = `https://api.waifu.pics/sfw/pat`;
const response = await axios.get(apiUrl);
const data = response.data;

await conn.sendMessage(from, { image: { url: data.url }, caption: '🍁 *Random Anime pat Image* 🍓\n> KING-HANSA-LITE' }, { quoted: mek });
} catch (e) {
console.log(e);
reply(`Error fetching anime girl image: ${e.message}`);
}
});
//========================================================
cmd({
pattern: "slap",
desc: "Fetch a random slap",
category: "misc",
react: "🍒",
filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {
const apiUrl = `https://api.waifu.pics/sfw/slap`;
const response = await axios.get(apiUrl);
const data = response.data;

await conn.sendMessage(from, { image: { url: data.url }, caption: '🍁 *Random slap* 🍓\n> KING-HANSA-LITE' }, { quoted: mek });
} catch (e) {
console.log(e);
reply(`Error fetching anime girl image: ${e.message}`);
}
});
//===========================================================
cmd({
pattern: "trap",
desc: "Fetch a random trap girl image.",
category: "anime",
react: "🍓",
filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {
const apiUrl = `https://api.waifu.pics/nsfw/trap`;
const response = await axios.get(apiUrl);
const data = response.data;

await conn.sendMessage(from, { image: { url: data.url }, caption: '🍁 *Random trap Girl Image* 🍓\n> KING-HANSA-LITE' }, { quoted: mek });
} catch (e) {
console.log(e);
reply(`Error fetching anime girl image: ${e.message}`);
}
});
