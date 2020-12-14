const { MessageEmbed } = require('discord.js')
const { ownerID } = require('../config.json')
const { no } = require('../utils/emojis.json')

module.exports = {
	name: 'eval',
	description: 'Evals something, Owner only :)',
	aliases: ['e'],
	usage: 'eval <code>',
	cooldown: 1,
	execute(message, args) {
        if (!message.author.id == ownerID) return message.react(`${no}`);
const input = args.join(' '); 
if (!input) return message.channel.send('Please provide code to eval');
if(!input.toLowerCase().includes('token')) {

  const embed = new MessageEmbed();
  try {
    let output = eval(input);
    if (typeof output !== 'string') output = require('util').inspect(output, { depth: 0 });
    
    embed
      .addField('Input', `\`\`\`js\n${input.length > 1024 ? 'Too large to display.' : input}\`\`\``)
      .addField('Output', `\`\`\`js\n${output.length > 1024 ? 'Too large to display.' : output}\`\`\``)
      .setColor('#66FF00');

  } catch(err) {
    embed
      .addField('Input', `\`\`\`js\n${input.length > 1024 ? 'Too large to display.' : input}\`\`\``)
      .addField('Output', `\`\`\`js\n${err.length > 1024 ? 'Too large to display.' : err}\`\`\``)
      .setColor('#FF0000');
  }

  message.channel.send(embed);

} else {
  message.channel.send('(╯°□°)╯︵ ┻━┻ MY token. **MINE**.');
}
    }
}