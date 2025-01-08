const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "iJxXUbIB#2YdZCVMoLiF-kiwHprgQfs09Qsc4kuHLdPmR1MIv3H8",
MONGODB: process.env.MONGODB || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/",
BOT_NUMBER: process.env.BOT_NUMBER || "94778721239",
OWNER_REACT: process.env.OWNER_REACT || "🪀",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
READ_CMD: process.env.READ_CMD || "true",
AUTO_VOICE:"true"
};
