const path = require("path");
const fs = require("fs").promises;
const BaseEvent = require("../base/BaseEvent");
const BaseCommand = require("../base/BaseCommand");

async function registerCommands(client, dir = "") {
    const filePath = path.join(__dirname, dir);
    const files = await fs.readdir(filePath);
    for (const file of files) {
        const stat = await fs.lstat(path.join(filePath, file));
        if (stat.isDirectory())
            await registerCommands(client, path.join(dir, file));
        if (file.endsWith(".js")) {
            const Command = require(path.join(filePath, file));
            if (Command.prototype instanceof BaseCommand) {
                const cmd = new Command();
                await client.commands.set(cmd.name, cmd);
                console.log(
                    "🎉  Successfully registered " + cmd.name + " command !",
                );
            }
        }
    }
}

async function registerEvents(client, dir = "") {
    const filePath = path.join(__dirname, dir);
    const files = await fs.readdir(filePath);
    for (const file of files) {
        const stat = await fs.lstat(path.join(filePath, file));
        if (stat.isDirectory()) await registerEvents(client, path.join(dir, file));
        if (file.endsWith(".js")) {
            const Event = require(path.join(filePath, file));
            if (Event.prototype instanceof BaseEvent) {
                const event = new Event();
                console.log(
                    "🎉  Succesfully registered " + event.name + " event !"
                );
                client.on(event.name, event.run.bind(event, client));
            }
        }
    }
}


module.exports = { registerEvents, registerCommands };