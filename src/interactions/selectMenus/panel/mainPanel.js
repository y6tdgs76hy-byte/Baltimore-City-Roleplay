// placeholder
import { EmbedBuilder } from 'discord.js';

export default {
    name: 'main_panel',

    async execute(interaction) {

        const value = interaction.values[0];

        let embed;

        if (value === 'information') {
            embed = new EmbedBuilder()
                .setTitle('ℹ️ Server Information')
                .setDescription('Server information goes here.')
                .setColor('Blue');
        }

        if (value === 'roblox_rules') {
            embed = new EmbedBuilder()
                .setTitle('📜 Roblox Rules')
                .setDescription('Roblox rules go here.')
                .setColor('Red');
        }

        if (value === 'discord_rules') {
            embed = new EmbedBuilder()
                .setTitle('📜 Discord Rules')
                .setDescription('Discord rules go here.')
                .setColor('Red');
        }

        if (value === 'shop_perks') {
            embed = new EmbedBuilder()
                .setTitle('🛒 Shop / Booster Perks')
                .setDescription('Shop and booster perks go here.')
                .setColor('Green');
        }

        if (!embed) {
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
