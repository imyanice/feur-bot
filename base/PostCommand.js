module.exports = class PostCommand {
    constructor(name) {
        this.name = name;
    }

    async post(client, data, guild) {
        await client.guilds.cache.get('867101383152893982')?.commands.create(data);
    }
};