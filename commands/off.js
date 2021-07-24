const BaseCommand = require("../base/BaseCommand"); // Require the base command file

module.exports = class Off extends BaseCommand { // Create the hi command
    constructor() {
        super("off"); // Register the command
    }
    async run(client, interaction) {
        client.db.set(interaction.guild.id, "off");
        await interaction.reply("Le bot ne va pas répondre quand il entendera 'quoi' !");
    }
};