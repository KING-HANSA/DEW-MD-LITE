const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "XNR11YIQ#FZuTHzVR8JYnbCp17INiQIVG5VZlNHS5m9t-RB-YnAc",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_REACT: process.env.AUTO_REACT || "true",
OWNER_REACT: process.env.OWNER_REACT || "true",
MONGODB: process.env.MONGODB || "mongodb+srv://Xcelsama:Xcel@xcelsama.qpklf.mongodb.net/?retryWrites=true&w=majority&appName=Xcelsama",
ANTI_BAD: process.env.ANTI_BAD || "true"
};
