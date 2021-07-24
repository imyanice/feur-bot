const BaseEvent = require("../base/BaseEvent"); // Require the base event file

module.exports = class InteractionEvent extends BaseEvent {
  // Create the interaction event
  constructor() {
    super("interactionCreate"); // Register the event
  }

  async run(client, interaction) {
    if (interaction.isCommand()) {
      // console.log(interaction) If you want to see the JSON object.
      const command = interaction.commandName; // Take the command name
      const commandRegistered = client.commands.get(command); // Get the command from our command map
      if (commandRegistered) {
        // If the command was found
        commandRegistered.run(client, interaction); // Run it
      }
    } else if (interaction.isButton()) {
      if (interaction.customId === "offyes") {
        client.db.set(interaction.guild.id, "off");
        await interaction.reply({
          content: "Ok :ok_hand: j'ai désactivé le bot !",
          components: [],
        });
      } else if (interaction.customId === "offno") {
        await interaction.reply({
          content: "Ok :ok_hand: je n'ai pas désactivé le bot !",
          components: [],
        });
      } else if (interaction.customId === "onno") {
        await interaction.reply({
          content: "Ok :ok_hand:, je n'ai pas activé le bot !",
          components: [],
        });
      } else if (interaction.customId === "onyes") {
        client.db.set(interaction.guild.id, "on");
        await interaction.reply({
          content: "Ok :ok_hand:, j'ai activé le bot !",
          components: [],
        });
      }
    }
  }
};
