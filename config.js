const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "iJxXUbIB#2YdZCVMoLiF-kiwHprgQfs09Qsc4kuHLdPmR1MIv3H8",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/JL9z4b0.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "HELLOW THEIR, DEW-MD IS ALIVE...\n\nOWNER: HANSA DEWMINA\n\nTHANKS FOR USING DEW-MD-LITE\n\n> *© ᴅᴇᴡ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
BOT_NUMBER: process.env.BOT_NUMBER || "94778721239",
OWNER_REACT: process.env.OWNER_REACT || "🪀",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
READ_CMD: process.env.READ_CMD || "true",
AUTO_VOICE:"true"
};

