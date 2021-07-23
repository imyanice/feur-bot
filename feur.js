const Feur = require("./base/Feur"), // Require the base client
    {
        registerCommands, // Require the register commands function
        registerEvents, // Require the register events function
    } = require("./utils/handler");

const client = new Feur(); // Create the client

const init = async () => { // Create a init func
    await registerEvents(client, "../events"); // Execute the register events function
    await registerCommands(client, "../commands"); // Execute the register commands function
    await client.login(client.config.token); // Login to the discord api (bot)
};

init().then(() => console.log("Init completed !")); // Start the initialisation


// If there is an unhandledRejection, log it
process.on("unhandledRejection", (err) => {
    console.error(err);
});