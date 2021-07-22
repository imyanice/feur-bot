const BaseEvent = require("../base/BaseEvent");

module.exports = class InteractionEvent extends BaseEvent {
    constructor() {
        super("messageCreate");
    }

    async run(client, message) {
        if (message.author.bot) return;
        if (message.content.toLowerCase().endsWith("koi") || message.content.toLowerCase().endsWith("coi") ||message.content.toLowerCase().endsWith("qoi") ||message.content.toLowerCase().endsWith("qwa") || message.content.toLowerCase().endsWith("quoi") || message.content.toLowerCase().endsWith("coi") || message.content.toLowerCase().endsWith("cwa") || message.content.toLowerCase().endsWith("pk") || message.content.toLowerCase().endsWith("pourquoi")) {
            message.reply("-feur")
        }
    }
};