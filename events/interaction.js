const BaseEvent = require("../base/BaseEvent"); // Require the base event file

module.exports = class InteractionEvent extends BaseEvent { // Create the interaction event
    constructor() {
        super("interactionCreate"); // Register the event
    }

    async run(client, interaction) {
        // console.log(interaction) If you want to see the JSON object.
        const command = interaction.commandName; // Take the command name
        const commandRegistered = client.commands.get(command); // Get the command from our command map
        if (commandRegistered) { // If the command was found
            commandRegistered.run(client, interaction); // Run it
        }
    }
};