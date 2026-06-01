import { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('panel')
        .setDescription('Server control panel'),

    async execute(interaction) {

        const embed = new EmbedBuilder()
            .setColor('Blue')
            .setTitle('📌 Server Panel')
            .setDescription(
                'Welcome to the server panel.\n\nSelect an option below to continue.'
            )
            .setImage('PASTE_YOUR_BANNER_URL_HERE')
            .setFooter({ text: 'Server Panel System' });

        const menu = new StringSelectMenuBuilder()
            .setCustomId('main_panel')
            .setPlaceholder('Select an option...')
            .addOptions(
                {
                    label: 'Server Information',
                    value: 'information',
                    emoji: 'ℹ️'
                },
                {
                    label: 'Roblox Rules',
                    value: 'roblox_rules',
                    emoji: '📜'
                },
                {
                    label: 'Discord Rules',
                    value: 'discord_rules',
                    emoji: '📜'
                },
                {
                    label: 'Shop / Booster Perks',
                    value: 'shop_perks',
                    emoji: '🛒'
                }
            );

        const row = new ActionRowBuilder().addComponents(menu);

        await interaction.reply({
            embeds: [embed],
            components: [row]
        });
    }
};
