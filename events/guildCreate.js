const BaseEvent = require("../base/BaseEvent"); // Require the base event file

module.exports = class GuildCreateEvent extends BaseEvent { // Create the Ready event
    constructor() {
        super("guildCreate"); // Register the event
    }

    async run(client, guild) {
        client.db.set(guild.id, "off");
    }
};