const { Client, Intents } = require("discord.js"); // Require the Discord.JS@dev (V13) library

class Feur extends Client { // Create my new client
    constructor() {
        super({ // Connect with Intents
            intents: [
                Intents.FLAGS.GUILDS,
                Intents.FLAGS.GUILD_MEMBERS,
                Intents.FLAGS.GUILD_MESSAGES,
                Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
                Intents.FLAGS.GUILD_VOICE_STATES,
                Intents.FLAGS.DIRECT_MESSAGES,
            ],
        });

        this.config = require("../config"); // Load the config file
        this.commands = new Map(); // Create the command Map
    }
}

module.exports = Feur; // Export the new client