const Discord = require('discord.js')
const client = new Discord.Client()

client.once('ready', () => {
    console.log('Bot is ready!')
})

client.on('message', msg => {
    if (msg.content === '!ping') {
        msg.reply('Pong!')
    }
})

client.login('토큰 입력')