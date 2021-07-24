const BaseCommand = require("../base/BaseCommand"); // Require the base command file

module.exports = class Hi extends BaseCommand {
  // Create the hi command
  constructor() {
    super("hello"); // Register the command
  }
  async run(client, interaction) {
    await interaction.reply(
      "Feur feuuur feeur fffeur ffeeurr ! (Bonjour en feuririen)"
    ); // Reply with a troll message
  }
};
