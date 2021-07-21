const BaseEvent = require("../base/BaseEvent");

module.exports = class InteractionEvent extends BaseEvent {
    constructor() {
        super("messageCreate");
    }

    async run(client, message) {
        if (message.author.bot) return;
        if (message.content.endsWith("koi") || message.content.endsWith("coi") ||message.content.endsWith("qoi") ||message.content.endsWith("qwa") || message.content.endsWith("quoi") || message.content.endsWith("coi") || message.content.endsWith("cwa")) {
            message.reply("-feur")
        }
    }
};