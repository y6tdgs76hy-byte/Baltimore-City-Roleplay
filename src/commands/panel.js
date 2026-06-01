import { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('panel')
        .setDescription('Server control panel'),

    async execute(interaction) {

        const embed = new EmbedBuilder()
            .setColor('Blue')
            .setTitle('‎ ‎ <:PMBRP:1360042975413145741> • PMBRP')
            .setDescription(
                `Welcome to **PMBRP Roleplay**, a realistic and professional Emergency Response: Liberty County community.\n\n` +
                `Use the dropdown below to navigate the server panel.\n\n` +
                `━━━━━━━━━━━━━━━━━━━━\n` +
                `📌 Applications & Forms\n` +
                `🎭 Self Roles\n` +
                `🛒 Shop & Perks`
            )
            .setImage('PASTE_BANNER_URL_HERE')
            .setFooter({ text: 'PMBRP Roleplay • Panel System' });

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
