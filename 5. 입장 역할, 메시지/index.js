const Discord = require('discord.js')
const client = new Discord.Client()

client.once('ready', () => {
    console.log('Bot is ready!')

    setInterval(() => {
        const statuses = [
            '"!ping"을 사용해서 대답을 받아보세요.',
            '테스트봇 made by Ddongddi'
        ]

        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "PLAYING" })
    }, 10000) //1000 = 1초 5000 = 5초 10000 = 10초
})

client.on('guildMemberAdd', guildMember => {
    var welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'test')
    guildMember.roles.add(welcomeRole)

    client.channels.cache.get('845638504691531789').send('새로우신 분이 들어왔습니다! 환영해주세요!')
})

client.on('message', msg => {
    if (msg.content === '!ping') {
        msg.reply('Pong!')
    }
})

client.login('토큰 입력')