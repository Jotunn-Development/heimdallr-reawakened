const DJS = require('discord.js')
const CommandHandler = require('command-handler')
const path = require('path')
require('dotenv/config')

const client = new DJS.Client({
  intents: ['GUILDS', 'GUILD_MESSAGES'],
})

client.on('ready', () => {
  console.log('Heimdallr is online.')

  new CommandHandler({
    client,
    commandsDir: path.join(__dirname, 'commands'),
  })
})

client.login(process.env.BETA_TOKEN)
