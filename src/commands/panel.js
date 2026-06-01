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
            .setImage('https://cdn.discordapp.com/attachments/1486538796907499531/1510858355634339850/Screenshot_2026-05-31_101241.png?ex=6a1e57fe&is=6a1d067e&hm=c3c25ca665140248ba2a9ed8716c2b7bac52c1c432ec596c836a5512cdc27571'); // optional banner

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
