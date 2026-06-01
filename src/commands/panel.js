import { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('panel')
        .setDescription('Server control panel'),

    async execute(interaction) {

        const embed = new EmbedBuilder()
            .setTitle('📌 Server Panel')
            .setDescription('Use the dropdown below:')
            .setColor('Blue');

        const menu = new StringSelectMenuBuilder()
            .setCustomId('main_panel')
            .setPlaceholder('Select an option...')
            .addOptions(
                { label: 'Rules', value: 'rules', emoji: '📜' },
                { label: 'Shop', value: 'shop', emoji: '🛒' },
                { label: 'Self Roles', value: 'roles', emoji: '🎭' }
            );

        const row = new ActionRowBuilder().addComponents(menu);

        await interaction.reply({
            embeds: [embed],
            components: [row]
        });
    }
};
