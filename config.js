/**
██████╗ ███████╗██╗    ██╗              ███╗   ███╗██████╗ 
██╔══██╗██╔════╝██║    ██║              ████╗ ████║██╔══██╗
██║  ██║█████╗  ██║ █╗ ██║    █████╗    ██╔████╔██║██║  ██║
██║  ██║██╔══╝  ██║███╗██║    ╚════╝    ██║╚██╔╝██║██║  ██║
██████╔╝███████╗╚███╔███╔╝              ██║ ╚═╝ ██║██████╔╝
╚═════╝ ╚══════╝ ╚══╝╚══╝               ╚═╝     ╚═╝╚═════╝ 
                                                                    
* Project name - DEW-MD 
* Author - Hansa Dewmina
* Team - Dew-coders 
* Version - vX

World best and powerfull whatsapp user bot in Sri lanka*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "qQgmiBAK#QSIAj4Ke6Ztn9-WdX7W1Rlm12_2sP5jR0mB1EObSpWs",
MONGODB: process.env.MONGODB || "mongodb+srv://Xcelsama:Xcel@xcelsama.qpklf.mongodb.net/?retryWrites=true&w=majority&appName=Xcelsama",
};
