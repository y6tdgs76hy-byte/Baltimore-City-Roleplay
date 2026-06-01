// placeholder
import { EmbedBuilder } from 'discord.js';

export default {
    name: 'main_panel',
    
    async execute(interaction, client) {
        const value = interaction.values[0];

        let embed;

        if (value === 'rules') {
            embed = new EmbedBuilder()
                .setTitle('📜 Rules')
                .setDescription(
                    '**Discord Rules:**\n- Be respectful\n- No spamming\n\n' +
                    '**Roblox Rules:**\n- No exploiting\n- No cheating'
                )
                .setColor('Red');
        }

        if (value === 'shop') {
            embed = new EmbedBuilder()
                .setTitle('🛒 Shop')
                .setDescription('Nothing here yet — we’ll build it next.')
                .setColor('Green');
        }

        if (value === 'roles') {
            embed = new EmbedBuilder()
                .setTitle('🎭 Self Roles')
                .setDescription('Role system coming next step.')
                .setColor('Purple');
        }

        await interaction.update({
            embeds: [embed],
            components: interaction.message.components
        });
    }
};
