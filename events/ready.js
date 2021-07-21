const BaseEvent = require("../base/BaseEvent");

module.exports = class ReadyEvent extends BaseEvent {
    constructor() {
        super("ready");
    }

    async run(client) {
        console.log(
            `Logged as ${client.user.tag} in ${client.guilds.cache.size} !`,
            "ready"
        ); // Console log ready
        client.slashCmds.forEach((cmd) => {
            client.slashCmds
                .get(cmd.name)
                .run(client)
                .then(() => {
                    console.log(
                        "🎉  Succesfully posted " + cmd.name + " command !",
                        "/"
                    );
                });
        });
    }
};