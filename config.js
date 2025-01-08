const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "7QBykTCR#dtibamD9C6OF4tZuca31GlFGYQuQdsybJ-Mhc56vXIo",
MONGODB: process.env.MONGODB || "mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority",
};
