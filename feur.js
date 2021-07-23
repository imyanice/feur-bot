const Feur = require("./base/Feur"),
    {
        registerCommands,
        registerEvents,
    } = require("./utils/handler");

const client = new Feur();

const init = async () => {
    await registerEvents(client, "../events");
    await registerCommands(client, "../commands");
    await client.login(client.config.token);
};

init().then(() => console.log("Init terminé"));


// If there is an unhandledRejection, log it
process.on("unhandledRejection", (err) => {
    console.error(err);
});