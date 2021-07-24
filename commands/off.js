const BaseCommand = require("../base/BaseCommand"); // Require the base command file
const { MessageActionRow, MessageButton } = require("discord.js");

module.exports = class Off extends BaseCommand {
  // Create the hi command
  constructor() {
    super("off"); // Register the command
  }
  async run(client, interaction) {
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("offyes")
        .setLabel("Oui, désactive le !")
        .setStyle("DANGER"),
      new MessageButton()
        .setCustomId("offno")
        .setLabel("Non, je me suis trompé !")
        .setStyle("DANGER")
    );
    await interaction.reply({
      content:
        "Le bot ne va pas répondre quand il entendera 'quoi', êtes vous sur ?",
      components: [row],
    });
  }
};
