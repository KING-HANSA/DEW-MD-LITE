const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "XDoDGSbD#qfoi5Q0UDdM7Eh9m38cNQvHRFmksQELxJ8FdlirUWGk",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/dfkL19B/20241019-101138.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HELLOW THEIR, KING-HANSA IS ALIVE...\n\nOWNER: HANSA DEWMINA\n\nTHANKS FOR USING KING-HANSA-LITE\n\n> *© ᴋɪɴɢ ʜᴀɴꜱᴀ ʟɪᴛᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*/n/n*> ɢɪᴛʜᴜʙ :* github.com/KING-HANSA/KING-HANSA-LITE/",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
BOT_NUMBER: process.env.BOT_NUMBER || "94701515609",
OWNER_REACT: process.env.OWNER_REACT || "🍁",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
READ_CMD: process.env.READ_CMD || "true",
AUTO_VOICE:"true"
};

