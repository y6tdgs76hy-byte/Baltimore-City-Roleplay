import { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('panel')
        .setDescription('Server control panel'),

    async execute(interaction) {

        const embed = new EmbedBuilder()
            .setColor('Blue')
            .setTitle('‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ <• Baltimore City Roleplay')
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
            .setImage('https://cdn.discordapp.com/attachments/1486538796907499531/1510858355634339850/Screenshot_2026-05-31_101241.png?ex=6a1e57fe&is=6a1d067e&hm=c3c25ca665140248ba2a9ed8716c2b7bac52c1c432ec596c836a5512cdc27571')
            .setFooter({ text: 'BCRP Roleplay • Interactive Panel' });

        const menu = new StringSelectMenuBuilder()
            .setCustomId('main_panel')
            .setPlaceholder('Select an option...')
            .addOptions(
    {
        label: 'Server Information',
        value: 'information',
        emoji: ''
    },
    {
        label: 'Roblox Rules',
        value: 'roblox_rules',
        emoji: ''
    },
    {
        label: 'Discord Rules',
        value: 'discord_rules',
        emoji: ''
    },
    {
        label: 'Shop / Booster Perks',
        value: 'shop_perks',
        emoji: ''
    }
)

        const row = new ActionRowBuilder().addComponents(menu);

        await interaction.reply({
            embeds: [embed],
            components: [row]
        });
    }
};
