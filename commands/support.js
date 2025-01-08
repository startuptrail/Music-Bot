const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "support",
  description: "Get support server link",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {

      const supportServerLink = "https://discord.gg/e76xPAFUzp";
      const githubLink = "https://github.com/startuptrail";
      const replitLink = "https://replit.com/@Startup-Gaming";
      const youtubeLink = "https://www.youtube.com/@StartupGamingTamil";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Support Server',
              iconURL: 'https://media.discordapp.net/attachments/1318269035992973422/1326537695580917824/Startup_Gaming.png?ex=677fca00&is=677e7880&hm=fa7746e06e146f733e36028dbc704b3100683942d556487ea441010485ced17b&=&format=webp&quality=lossless&width=550&height=144', 
              url: 'https://discord.gg/e76xPAFUzp'
          })
            .setDescription(`➡️ **Join our Discord server for support and updates:**\n- Discord - ${supportServerLink}\n\n➡️ **Follow us on:**\n- GitHub - ${githubLink}\n- Replit - ${replitLink}\n- YouTube - ${youtubeLink}`)
            .setImage('https://cdn.discordapp.com/attachments/1113800537402527903/1236803979996958740/11.png?ex=663956f7&is=66380577&hm=3b3c19a11adcb979517a133f2907f671305d23f1f5092cf7df043e6d5cab07bc&')
            .setTimestamp();

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
    console.error(e); 
  }
  },
};
