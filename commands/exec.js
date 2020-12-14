const { MessageEmbed } = require('discord.js')
const { ownerID } = require('../config.json')
const { no } = require('../utils/emojis.json')

module.exports = {
	name: 'eval',
	description: 'Exexute Something or run bash commands through bot.',
	usage: 'exec <code>',
	cooldown: 5,
	async execute(message, args) {
        message.channel.send('Executing . . .').then(i => i.delete({ timeout: 15000})) // delete messages after 15 seconds
        if (!message.author.id == ownerID) return message.react(`${no}`); // return if the user isn't bot owner.
        const text = args.join(" ")
        const { exec } = require('child_process')
        const msg = await message.channel.send('Loading . . .')
       exec(text , (error, stdout) => {
       const response = error || stdout
       message.channel.send(response, {split: true, code: true}) })
    }
}