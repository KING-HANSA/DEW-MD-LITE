/**
██████╗ ███████╗██╗    ██╗    ███╗   ███╗██████╗     ██╗     ██╗████████╗███████╗
██╔══██╗██╔════╝██║    ██║    ████╗ ████║██╔══██╗    ██║     ██║╚══██╔══╝██╔════╝
██║  ██║█████╗  ██║ █╗ ██║    ██╔████╔██║██║  ██║    ██║     ██║   ██║   █████╗  
██║  ██║██╔══╝  ██║███╗██║    ██║╚██╔╝██║██║  ██║    ██║     ██║   ██║   ██╔══╝  
██████╔╝███████╗╚███╔███╔╝    ██║ ╚═╝ ██║██████╔╝    ███████╗██║   ██║   ███████╗
╚═════╝ ╚══════╝ ╚══╝╚══╝     ╚═╝     ╚═╝╚═════╝     ╚══════╝╚═╝   ╚═╝   ╚══════╝                                                                            
         
* Project name - DEW-MD-LITE 
* Author - Hansa Dewmina
* Team - Dewminacoders 
* Version - vX

World best and powerfull whatsapp user bot in Sri lanka*/

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
╭────《 *Define* 》
│ ╭───────────◆
│ │ Word:${definitionData.word}
│ │ Definition:${definition}
│ │ Example:${example}
│ │ Synonyms:${synonyms}
│ ╰───────────◆
╰───────────⊷

*DEW - MD LITE*
> Dew-Coders™`;

                                 return reply(wordInfo);
                             } catch (e) {
                                 console.log(e);
                                 if (e.response && e.response.status === 404) {
                                     return reply("🚫 Word not found. Please check the spelling and try again.");
                                 }
                                 return reply("⚠️ An error occurred while fetching the definition. Please try again later.");
                             }
                         });
