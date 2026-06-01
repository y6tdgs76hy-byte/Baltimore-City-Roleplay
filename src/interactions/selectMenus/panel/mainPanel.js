// placeholder
import { EmbedBuilder } from 'discord.js';

export default {
    name: 'main_panel',

    async execute(interaction) {
        const value = interaction.values[0];

        let embed;

        if (value === 'rules') {
            embed = new EmbedBuilder()
                .setTitle('📜 Rules')
                .setDescription('Server + Roblox rules go here')
                .setColor('Red');
        }

        if (value === 'shop') {
            embed = new EmbedBuilder()
                .setTitle('🛒 Shop')
                .setDescription('Shop items go here')
                .setColor('Green');
        }

        if (value === 'roles') {
            embed = new EmbedBuilder()
                .setTitle('🎭 Self Roles')
                .setDescription('Role info goes here')
                .setColor('Purple');
        }

        await interaction.update({
            components: interaction.message.components,
            embeds: interaction.message.embeds
        });

        return interaction.followUp({
            embeds: [embed],
            ephemeral: true
        });
    }
};
