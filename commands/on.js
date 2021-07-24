const BaseCommand = require("../base/BaseCommand"); // Require the base command file

module.exports = class On extends BaseCommand { // Create the hi command
    constructor() {
        super("on"); // Register the command
    }
    async run(client, interaction) {
        client.db.set(interaction.guild.id, "on");
        await interaction.reply("Le bot va répondre quand il entendera quoi !")
    }
};