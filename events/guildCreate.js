const BaseEvent = require("../base/BaseEvent"); // Require the base event file
const datas = require("../commands/api/commands");

module.exports = class GuildCreateEvent extends BaseEvent {
  // Create the Ready event
  constructor() {
    super("guildCreate"); // Register the event
  }

  async run(client, guild) {
    client.db.set(guild.id, "off");
    for (const data of datas) {
      await client.guilds.cache
          .get(guild.id)
          ?.commands.create(data)
          .then(() => {
            console.log(`The command ${data.name} was successfully posted to the ${guild.name} server id: ${guild.id}!`);
          })
          .catch((e) => console.log(e));
    }
  }
};
