// placeholder
import { EmbedBuilder } from 'discord.js';

export default {
    name: 'main_panel',

    async execute(interaction) {

        const value = interaction.values[0];

        let embed;

        switch (value) {

            case 'information':
                embed = new EmbedBuilder()
                    .setTitle('ℹ️ Server Information')
                    .setDescription('Server information goes here.')
                    .setColor('Blue');
                break;

            case 'roblox_rules':
                embed = new EmbedBuilder()
                    .setTitle('📜 Roblox Rules')
                    .setDescription('Roblox rules go here.')
                    .setColor('Red');
                break;

            case 'discord_rules':
                embed = new EmbedBuilder()
                    .setTitle('📜 Discord Rules')
                    .setDescription('Discord rules go here.')
                    .setColor('Red');
                break;

            case 'shop_perks':
                embed = new EmbedBuilder()
                    .setTitle('🛒 Shop / Booster Perks')
                    .setDescription('Shop and booster perks go here.')
                    .setColor('Green');
                break;

            default:
                return interaction.reply({
                    content: 'Invalid selection.',
                    ephemeral: true
                });
        }

        return interaction.reply({
            embeds: [embed],
            ephemeral: true
        });
    }
};
