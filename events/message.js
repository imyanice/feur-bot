const BaseEvent = require("../base/BaseEvent"); // Require the base event file

module.exports = class MessageEvent extends BaseEvent { // Create our message event class
    constructor() {
        super("messageCreate"); // Register our event
    }

    async run(client, message) {
        if (message.author.bot) return; // If the message is sent by a bot ignore it
        if ( // Check if the message ends with "quoi" (what in english) (there is also the sms way)
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
            message.reply("-feur"); // Reply with the fateful message
        } else if ( // Check if the message ends with "oui" (yes in english) (there is also the sms way)
               message.content.toLowerCase().endsWith("oui")
            || message.content.toLowerCase().endsWith("ui")
            || message.content.toLowerCase().endsWith("wi")
        ) {
            message.reply("-stiti") // Reply with the fateful message
        }
    }
};