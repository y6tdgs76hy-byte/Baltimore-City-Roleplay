import { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('panel')
        .setDescription('Server control panel'),

    async execute(interaction) {

        const embed = new EmbedBuilder()
            .setColor('Blue')
            .setTitle('‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ <:PMBRP:1360042975413145741> • Baltimore City Roleplay')
            .setDescription(
                `Welcome to **BCRP Roleplay**, a realistic and professional Emergency Response: Liberty County roleplay community based off of Baltimore City/County in maryland..\n\n` +
                `This panel contains all necessary information to help you navigate our **community hub**.\n\n` +
                `━━━━━━━━━━━━━━━━━━━━\n` +
                `📌 **Applications & Forms**\n` +
                `🧾 Staff Applications\n` +
                `🚔 Department Applications\n\n` +
                `━━━━━━━━━━━━━━━━━━━━\n` +
                `🎭 **Self Roles & Reaction Roles**\n` +
                `Select your roles using the menu below`
            )
            .setImage('PASTE_YOUR_BANNER_LINK_HERE')
            .setFooter({ text: 'BCRP Roleplay • Interactive Panel' });

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
