const Feur = require("./base/Feur"),
    {
        registerEvents,
        registerCommands,
        registerPostCommands,
    } = require("./utils/handler");

const client = new Feur();

const init = async () => {
    await registerCommands(client, "../commands");
    await registerEvents(client, "../events");
    await registerPostCommands(client, "../slashCommands");
    await client.login(client.config.token);
};

init();


// If there is an unhandledRejection, log it
process.on("unhandledRejection", (err) => {
    console.error(err);
});