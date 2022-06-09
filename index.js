const DJS = require('discord.js')
require('dotenv/config')

const client = new DJS.Client({
  intents: ['GUILDS'],
})

client.on('ready', () => {
  console.log('Heimdallr is online.')
})

client.login(process.env.BETA_TOKEN)
