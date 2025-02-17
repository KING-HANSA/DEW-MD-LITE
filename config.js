const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "bRg2wYhA#32vT1rlvYF17HOmRjB8vmM75UkZwN9K0P235BSGJYTA",
MONGODB: process.env.MONGODB || "mongodb://mongo:OnwkzvczuheRugZIGXqRZvPlowhWVBCt@gondola.proxy.rlwy.net:24753",
};
