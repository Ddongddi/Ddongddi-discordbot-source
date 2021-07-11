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

    if (msg.content === '!embed') {
        const embed = new Discord.MessageEmbed()
            .setColor('#0E008E')
            .setTitle('똥띠 천재')
            .setURL('https://www.youtube.com/channel/UCBvQvoo1dQNeTX_RTDT6aww')
            .setAuthor('똥띠TV', 'https://yt3.ggpht.com/ytc/AKedOLSTaVvyU97mgFqO9ljXIwYX98HTq8JrIMzgkBUWCQ=s88-c-k-c0x00ffffff-no-rj', 'https://www.youtube.com/channel/UCBvQvoo1dQNeTX_RTDT6aww')
            .setDescription('와 테스트')
            .setThumbnail('https://yt3.ggpht.com/ytc/AKedOLSTaVvyU97mgFqO9ljXIwYX98HTq8JrIMzgkBUWCQ=s88-c-k-c0x00ffffff-no-rj')
            .addFields(
                {name: '제목', value: '설명'},
                {name: '제목', value: '설명'},
                {name: '제목', value: '설명', inline: true},
                {name: '제목', value: '설명', inline: true}
            )
            .setImage('https://yt3.ggpht.com/ytc/AKedOLSTaVvyU97mgFqO9ljXIwYX98HTq8JrIMzgkBUWCQ=s88-c-k-c0x00ffffff-no-rj')
            .setFooter('똥띠TV 제공', 'https://yt3.ggpht.com/ytc/AKedOLSTaVvyU97mgFqO9ljXIwYX98HTq8JrIMzgkBUWCQ=s88-c-k-c0x00ffffff-no-rj')
            .setTimestamp()
            msg.channel.send(embed)
    }
})

client.login('토큰 입력')