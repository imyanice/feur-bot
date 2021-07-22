const BaseEvent = require("../base/BaseEvent");

module.exports = class InteractionEvent extends BaseEvent {
    constructor() {
        super("messageCreate");
    }

    async run(client, message) {
        if (message.author.bot) return;
        if (
               message.content.toLowerCase().endsWith("koi")
            || message.content.toLowerCase().endsWith("koua")
            || message.content.toLowerCase().endsWith("kwa")
            || message.content.toLowerCase().endsWith("coi")
            || message.content.toLowerCase().endsWith("qoi")
            || message.content.toLowerCase().endsWith("qwa")
            || message.content.toLowerCase().endsWith("quoi")
            || message.content.toLowerCase().endsWith("coi")
            || message.content.toLowerCase().endsWith("cwa")
            || message.content.toLowerCase().endsWith("pk")
            || message.content.toLowerCase().endsWith("pourquoi")
            || message.content.toLowerCase().endsWith("pourqoi")
            || message.content.toLowerCase().endsWith("pourcwa")
            || message.content.toLowerCase().endsWith("pourcoi")
        ) {
            message.reply("-feur");
        } else if (
               message.content.toLowerCase().endsWith("oui")
            || message.content.toLowerCase().endsWith("ui")
            || message.content.toLowerCase().endsWith("wi")
        ) {
            message.reply("-stiti")
        }

    }
};