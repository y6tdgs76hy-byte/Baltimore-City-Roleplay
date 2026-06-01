const {
    EmbedBuilder,
    ActionRowBuilder,
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder,
    ComponentType
} = require('discord.js');

function sendDashboard(interaction) {

    const dashboardEmbed = new EmbedBuilder()
        .setColor(0x2B2D31)
        .setTitle('🏛️ Baltimore City Roleplay')
        .setDescription(
            `**Official Community Dashboard**\n\n` +
            `Select a category below to access server information, departments, rules, and more.`
        )
        .setFooter({ text: 'BCPR • Information Access System' });

    const menu = new ActionRowBuilder().addComponents(
        new StringSelectMenuBuilder()
            .setCustomId('dashboard_select')
            .setPlaceholder('Select a category...')
            .addOptions(
                new StringSelectMenuOptionBuilder().setLabel('Server Information').setValue('server_info'),
                new StringSelectMenuOptionBuilder().setLabel('Department Information').setValue('departments'),
                new StringSelectMenuOptionBuilder().setLabel('Application Information').setValue('applications'),
                new StringSelectMenuOptionBuilder().setLabel('Rules & Policies').setValue('rules'),
                new StringSelectMenuOptionBuilder().setLabel('Support').setValue('support'),
                new StringSelectMenuOptionBuilder().setLabel('Staff Team').setValue('staff'),
                new StringSelectMenuOptionBuilder().setLabel('Premium Benefits').setValue('premium')
            )
    );

    interaction.reply({
        embeds: [dashboardEmbed],
        components: [menu]
    });
}

function handleDashboardSelect(interaction) {

    if (!interaction.isStringSelectMenu()) return;
    if (interaction.customId !== 'dashboard_select') return;

    const value = interaction.values[0];

    let embed = new EmbedBuilder().setColor(0x2B2D31);

    switch (value) {

        case 'server_info':
            embed.setTitle('🏛️ Server Information')
                .setDescription('Official information about Baltimore City Roleplay.');
            break;

        case 'departments':
            embed.setTitle('🚓 Department Information')
                .setDescription('Details about all server departments and divisions.');
            break;

        case 'applications':
            embed.setTitle('📝 Application Information')
                .setDescription('How to apply for staff, departments, and roles.');
            break;

        case 'rules':
            embed.setTitle('📜 Rules & Policies')
                .setDescription('Server rules and enforcement guidelines.');
            break;

        case 'support':
            embed.setTitle('🎧 Support')
                .setDescription('Need help? Open a ticket or contact staff.');
            break;

        case 'staff':
            embed.setTitle('👮 Staff Team')
                .setDescription('Meet the current staff team of the server.');
            break;

        case 'premium':
            embed.setTitle('⭐ Premium Benefits')
                .setDescription('Exclusive perks for premium members.');
            break;
    }

    interaction.reply({
        embeds: [embed],
        ephemeral: true
    });
}

module.exports = {
    sendDashboard,
    handleDashboardSelect
};
