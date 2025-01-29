const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://i.ibb.co/hgf2p9M/repository-open-graph-templatefdf.png' },
    { key: 'ALIVE_MSG', value: 'HELLOW THEIR, DEW-MD IS ALIVE...' },
    { key: 'PREFIX', value: '.' },
    { key: 'AUTO_READ_STATUS', value: 'true' },
    { key: 'MODE', value: 'public' },
    { key: 'BOT_NAME', value: 'DEW-MD' },
    { key: 'AUTO_VOICE', value: 'true' },
    { key: 'AUTO_STICKER', value: 'true' },
    { key: 'AUTO_REPLY', value: 'true' },
    { key: 'ANTI_BAD', value: 'true' },
    { key: 'ANTI_LINK', value: 'true' },
    { key: 'FAKE_RECORDING', value: 'true' },
    { key: 'AUTO_REACT', value: 'true' },
    { key: 'OWNER_REACT', value: 'true' },
    { key: 'DESCRIPTION', value: 'Advance Multi Device Whtsapp Bot By Hansa Dewmina' },
    { key: 'ALWAYS_ONLINE', value: 'true' },
    { key: 'AUTO_TYPING', value: 'true' },
    { key: 'PUBLIC_MODE', value: 'true' },
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
