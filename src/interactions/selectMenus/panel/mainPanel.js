export default {
    name: 'dashboard_menu',

    async execute(interaction, client) {

        const value = interaction.values[0];

        if (!interaction.deferred && !interaction.replied) {
            await interaction.deferReply({ ephemeral: true });
        }

        let embed;

        switch (value) {

            case 'server_info':
                embed = {
                    title: 'ℹ️ Server Information',
                    description: 'Server info here',
                    color: 0x2b2d31
                };
                break;

            case 'rules_policies':
                embed = {
                    title: '📜 Rules & Policies',
                    description: 'Rules go here',
                    color: 0x2b2d31
                };
                break;

            default:
                return interaction.editReply({
                    content: 'Invalid option.',
                });
        }

        return interaction.editReply({
            embeds: [embed],
            components: []
        });
    }
};
