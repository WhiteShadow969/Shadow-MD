// Thats Why You Are Single🥲😂

/*

$$$$$$\                                                      
$$  __$$\                                                        
$$ /  \__|$$\   $$\ $$$$$$$\  $$$$$\  $$$$$$$$|$$\                 $$/
\$$$$$$\  $$ |  $$ |$$  __$$\ $$|   $\ $$|  $$| $$\               $$/
 \____$$\ $$$$$$$$ |$$$$$$$$ |$$|    $|$$| n$$|   $$\    $$\     $$/
$$\   $$ |$$ |  $$ |$$ |  $$ |$$|   $/ $$|__$$|     $$\ $$/$$\ $$/
\$$$$$$  |$$ |  $$ |$$ |  $$ |$$$$$/   $$$$$$$|       $$/      $$/
 \______/  \______/ \_______/ \___/   |_______|      \__/     \__/

Project Name : Shadow MD
Creator      : Prince Mandivhei ( White Shadow )
Repo         : https//github.com/WhiteShadow969/Shadow-MD
Support      : wa.me/263713431767
*/





























const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');


cmd({
  pattern: 'fluxpro',
  react: '🧩',
  desc: 'Generate an image using Flux',
  category: 'image',
  filename: __filename
}, async (conn, mek, m, {
  body,
  from,
  quoted,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    const text = body.trim().replace(command, '').trim();
    if (!text) {
      return reply(`*Usage:* ${command} <prompt>\n\n*Example:* ${command} cat`);
    }

    await reply('> *Shadow Processing Image...*');

    const apiUrl = `https://api.davidcyriltech.my.id/flux?prompt=${encodeURIComponent(text)}`;

    await conn.sendMessage(m.chat, { image: { url: apiUrl }, caption: `🎨 *Flux Image Generator*\n\n📄 *Prompt:* ${text}\n\n> powered by white shadow` }, { quoted: m });
  } catch (error) {
    console.error('Error in Flux command:', error);
    reply(`*AN ERROR OCCURRED!! MESSAGE :*\n\n> ${error.message}`);
  }
});


