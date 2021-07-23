const BaseEvent = require("../base/BaseEvent"); // Require the base event file

module.exports = class ReadyEvent extends BaseEvent { // Create the Ready event
    constructor() {
        super("ready"); // Register the event
    }

    async run(client) {
        client.user.setActivity('Sheeeeeeeeeeeeeeeeeeeeeeeeeeeeeeesh !!!!!') // Set the status
        console.log(
            `Logged as ${client.user.tag} in ${client.guilds.cache.size} !`
        ); // Console log ready
        await client.guilds.cache.get('867101383152893982')?.commands.create( // Create a base command
            {
                name: "hello",
                description: "Reply with Hello because I LOVE U !",
            }
        ).then(() => {
            console.log("All the commands are successfully posted !"); // Then say if the commands are posted
        });
    }
};