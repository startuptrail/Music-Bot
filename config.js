

module.exports = {
  TOKEN: "MTMzNzA5NDkyOTgwNDk1MTY0NA.GEkbFE.ritNaKJpL3X5QDX39Q-hef6Iz1XdAXS-QppoZM",
  language: "en",
  ownerID: ["1234512256344002650", ""], 
  mongodbUri : "mongodb+srv://pranav:pranavffgame@music-bot.ovgmt.mongodb.net/?retryWrites=true&w=majority",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/e76xPAFUzp",
  embedTimeout: 5, 
  errorLog: "", 
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
    {
      name: "ChalresNaig Node",
      host: "lavahatry4.techbyte.host",
      port: 3000,
      password: "NAIGLAVA-dash.techbyte.host",
      host: "lavahatry4.techbyte.host",
      port: 3000,
      secure: false
    }
  ]
}
