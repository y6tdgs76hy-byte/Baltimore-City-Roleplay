import {
    SlashCommandBuilder,
    EmbedBuilder,
    ActionRowBuilder,
    StringSelectMenuBuilder
} from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('panel')
        .setDescription('Open the server dashboard'),

    async execute(interaction) {
    try {

        console.log("PANEL COMMAND TRIGGERED");

        const embed = new EmbedBuilder()
            .setTitle("Test Panel")
            .setDescription("If you see this, command works")
            .setColor("Blue");

        await interaction.reply({ embeds: [embed] });

    } catch (err) {
        console.error("🔥 PANEL ERROR:", err);
    }
}
        const embed = new EmbedBuilder()
            .setColor('#2b2d31')
            .setTitle('🏛️ Server Dashboard')
            .setDescription(
                `Welcome to the **Server Dashboard**.\n\n` +
                `Select a category below to continue.\n\n` +
                `━━━━━━━━━━━━━━━━━━━━`
            )
            .setImage('PASTE_YOUR_BANNER_URL_HERE')
            .setFooter({ text: 'Hybrid Dashboard System' })
            .setTimestamp();

        const menu = new StringSelectMenuBuilder()
            .setCustomId('dashboard_menu')
            .setPlaceholder('Select a category...')
            .addOptions(
                {
                    label: 'Server Information',
                    value: 'server_info',
                    emoji: 'ℹ️'
                },
                {
                    label: 'Department Information',
                    value: 'department_info',
                    emoji: '🏢'
                },
                {
                    label: 'Application Information',
                    value: 'application_info',
                    emoji: '📝'
                },
                {
                    label: 'Rules & Policies',
                    value: 'rules_policies',
                    emoji: '📜'
                },
                {
                    label: 'Support',
                    value: 'support',
                    emoji: '🎧'
                },
                {
                    label: 'Staff Team',
                    value: 'staff_team',
                    emoji: '👥'
                },
                {
                    label: 'Premium Benefits',
                    value: 'premium_benefits',
                    emoji: '💎'
                }
            );

        const row = new ActionRowBuilder().addComponents(menu);

        await interaction.reply({
            embeds: [embed],
            components: [row]
        });
    }
};
