const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://i.postimg.cc/zvpdnfsK/1727229710389.jpg' },
    { key: 'ALIVE_MSG', value: '*Hello , I am alive now!!*' },
    { key: 'PREFIX', value: '.' },
    { key: 'AUTO_READ_STATUS', value: 'true' },
    { key: 'MODE', value: 'public' },
    { key: 'AUTO_VOICE', value: 'true' },
    { key: 'AUTO_STICKER', value: 'true' },
    { key: 'AUTO_REPLY', value: 'true' },
    { key: 'ALLWAYS_OFFLINE', value: 'false' },
    { key: 'READ_CMD', value: 'true' },
    { key: 'RECORDING', value: 'true' },
    { key: 'AUTO_REACT', value: 'true' },
    { key: 'ANTI_BOT', value: 'true' },
    { key: 'ANTI_BAD', value: 'true' },
    { key: 'ANTI_LINK', value: 'true' },

];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
