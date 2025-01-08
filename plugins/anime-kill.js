
const axios = require('axios');
const { cmd, commands } = require('../command');

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
