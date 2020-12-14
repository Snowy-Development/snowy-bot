const { prefix } = require('../config.json');
const { MessageEmbed } = require('discord.js')
module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
        const helpEmbed = new MessageEmbed()
        .setTitle('Snowy')
        .addField('General', '`ping` | `help`')
        .addField('Developer Commands', '`eval`')
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(helpEmbed)
}}