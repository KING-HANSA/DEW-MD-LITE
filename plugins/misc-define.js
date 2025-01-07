const axios = require('axios');
const { cmd } = require('../command');

                         cmd({
                             pattern: "define",
                             desc: "📚 Get the definition of a word",
                             react: "🔍",
                             category: "misc",
                             filename: __filename
                         },
                         async (conn, mek, m, { from, q, reply }) => {
                             try {
                                 if (!q) return reply("❗ Please provide a word to define. Usage: .define [word]");

                                 const word = q;
                                 const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

                                 const response = await axios.get(url);
                                 const definitionData = response.data[0];

                                 const definition = definitionData.meanings[0].definitions[0].definition;
                                 const example = definitionData.meanings[0].definitions[0].example || 'No example available';
                                 const synonyms = definitionData.meanings[0].definitions[0].synonyms.join(', ') || 'No synonyms available';

const wordInfo = `
💚*THANKS FOR KING-HANSA WHATSAPP BOT* ${senderNumber}

╭─「 *ᴅᴇꜰɪɴᴇ* 」
│◈ *ωσя∂*  ${definitionData.word}
│◈ *∂єƒιηιтιση*  ${definition}
│◈ *єχαмρℓє*  ${example}
│◈ *ѕуησηумѕ*  ${synonyms}
╰──────────●●►
╭──────────●●►
│© *𝐊𝐈𝐍𝐆 𝐇𝐀𝐍𝐒𝐀-𝐋𝐈𝐓𝐄 - 𝐌𝐃* 
│*🍁 *GitHub*: *github.com/KING-HANSA/KING-HANSA-LITE/* 
╰───────────●●►
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐇𝐀𝐍𝐒𝐀 𝐃𝐄𝐖𝐌𝐈𝐍𝐀`;

                                 return reply(wordInfo);
                             } catch (e) {
                                 console.log(e);
                                 if (e.response && e.response.status === 404) {
                                     return reply("🚫 Word not found. Please check the spelling and try again.");
                                 }
                                 return reply("⚠️ An error occurred while fetching the definition. Please try again later.");
                             }
                         });
