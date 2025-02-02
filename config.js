

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
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
