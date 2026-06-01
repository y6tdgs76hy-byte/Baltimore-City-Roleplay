import { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('panel')
        .setDescription('Server control panel'),

    async execute(interaction) {

        const embed = new EmbedBuilder()
            .setTitle('📌 Server Panel')
            .setDescription(
                'Welcome to the server panel.\n\n' +
                'Use the dropdown below to navigate:\n' +
                '📜 Rules\n🛒 Shop\n🎭 Self Roles'
            )
            .setColor('Blue')
            .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
            .setImage('https://i.imgur.com/yourBanner.png'); // optional banner

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
