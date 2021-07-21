const BaseEvent = require("../base/BaseEvent");

module.exports = class InteractionEvent extends BaseEvent {
    constructor() {
        super("interactionCreate");
    }

    async run(client, interaction) {
        // console.log(interaction) If you want see the JSON object.
        const command = interaction.commandName;
        const commandRegistered = client.commands.get(command);
        if (commandRegistered) {
            commandRegistered.run(client, interaction);
        }
    }
};