const { Client, Intents } = require("discord.js");

class Feur extends Client {
    constructor() {
        super({
            intents: [
                Intents.FLAGS.GUILDS,
                Intents.FLAGS.GUILD_MEMBERS,
                Intents.FLAGS.GUILD_MESSAGES,
                Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
                Intents.FLAGS.GUILD_VOICE_STATES,
                Intents.FLAGS.DIRECT_MESSAGES,
            ],
        });

        this.config = require("../config");
        this.events = new Map();
        this.slashCmds = new Map();
    }
}

module.exports = Feur;