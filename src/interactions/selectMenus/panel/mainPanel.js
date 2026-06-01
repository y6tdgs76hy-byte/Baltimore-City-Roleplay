// placeholder
const { SlashCommandBuilder } = require('discord.js');
const { sendDashboard } = require('./panel');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('panel')
        .setDescription('Opens the server dashboard'),

    async execute(interaction) {
        await sendDashboard(interaction);
    }
};
