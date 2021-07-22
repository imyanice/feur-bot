const BaseCommand = require("../base/BaseCommand");

module.exports = class Hi extends BaseCommand {
    constructor() {
        super("hello", "fun");
    }
    async run(client, interaction) {
        await interaction.reply("Feur feuuur feeur fffeur ffeeurr ! (Bonjour en feuririen)");
    }
};