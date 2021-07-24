const BaseEvent = require("../base/BaseEvent"); // Require the base event file

module.exports = class GuildDeleteEvent extends BaseEvent { // Create the GuildDelete event
    constructor() {
        super("guildDelete"); // Register the event
    }

    async run(client, guild) {
        client.db.delete(guild.id)
    }
};