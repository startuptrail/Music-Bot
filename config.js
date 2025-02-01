module.exports = {
  TOKEN: "MTMyNTg3NDE1NzY5ODgxNDEzMw.GmV8fH.gvF-ILG302xkehqStGuUnfFJkFoYMaqO64SlI8",
  ownerID: ["1234512256344002650", ""], 
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  musicardTheme:"themes16", //Goes from themes1 to themes19
  activityName: "Music", // This is bot status Write Anything here 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/e76xPAFUzp",
  CheckmarkIcon: "https://cdn.discordapp.com/emojis/819446784647757834.gif",
  MusicIcon:"https://cdn.discordapp.com/emojis/763415718271385610.gif",
  embedTimeout: 5,  // Timeout before the button interaction embeds are deleted ( Default - 5 seconds)
  errorLog: "", 

   // Lavalink Server Details

  nodes: [
    {
        name: "INZEWORLD.COM (DE)",
        host: "lava.inzeworld.com",
        port: 3128,
        password: "saher.inzeworld.com",
        reconnectTimeout: 5000,
        reconnectTries: Infinity,
        secure: false
    },
 ]
}
