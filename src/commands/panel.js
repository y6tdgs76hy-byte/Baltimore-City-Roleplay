import { EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } from 'discord.js';

export default {
    name: 'panel',
    description: 'Server panel with dropdown menu',

    async execute(interaction) {

        const embed = new EmbedBuilder()
            .setTitle('📌 Server Panel')
            .setDescription('Use the dropdown below to navigate:')
            .setColor('Blue');

        const menu = new StringSelectMenuBuilder()
            .setCustomId('main_panel')
            .setPlaceholder('Select an option...')
            .addOptions(
                {
                    label: 'Rules',
                    value: 'rules',
                    emoji: '📜'
                },
                {
                    label: 'Shop',
                    value: 'shop',
                    emoji: '🛒'
                },
                {
                    label: 'Self Roles',
                    value: 'roles',
                    emoji: '🎭'
                }
            );

        const row = new ActionRowBuilder().addComponents(menu);

        await interaction.reply({
            embeds: [embed],
            components: [row]
        });
    }
};
