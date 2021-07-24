const BaseEvent = require("../base/BaseEvent"); // Require the base event file
const datas = require("../commands/api/commands");

module.exports = class ReadyEvent extends BaseEvent { // Create the Ready event
    constructor() {
        super("ready"); // Register the event
    }

    async run(client) {
        client.user.setActivity('Sheeeeeeeeeeeeeeeeeeeeeeeeeeeeeeesh !!!!!') // Set the status
        console.log(
            `Logged as ${client.user.tag} in ${client.guilds.cache.size} !`
        ); // Console log ready
        for (const data of datas) {
            await client.guilds.cache.get("867101383152893982")?.commands.create(data)
                .then(() => {
                    console.log(`The command ${data.name} was successfully posted !`)
                })
                .catch((e) => console.log(e));
        }

    }
};