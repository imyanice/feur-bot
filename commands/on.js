const BaseCommand = require("../base/BaseCommand"); // Require the base command file

module.exports = class On extends BaseCommand {
  // Create the hi command
  constructor() {
    super("on"); // Register the command
  }
  async run(client, interaction) {
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("onyes")
        .setLabel("Oui, active le !")
        .setStyle("DANGER"),
      new MessageButton()
        .setCustomId("onno")
        .setLabel("Non, je me suis trompé !")
        .setStyle("DANGER")
    );
    await interaction.reply({
      content: "Le bot va répondre quand il entendera quoi !",
      components: [row],
    });
  }
};
