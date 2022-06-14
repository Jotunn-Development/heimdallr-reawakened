const DJS = require('discord.js')
const CommandHandler = require('command-handler')
const path = require('path')
require('dotenv/config')

const testServers = process.env.TEST_SERVERS.split(',')

const client = new DJS.Client({
  intents: ['GUILDS', 'GUILD_MESSAGES'],
})

client.on('ready', () => {
  console.log('Heimdallr is online.')

  new CommandHandler({
    client,
    mongoUri: process.env.MONGO_URI,
    commandsDir: path.join(__dirname, 'commands'),
    testServers: testServers,
  })
})

client.login(process.env.BETA_TOKEN)
