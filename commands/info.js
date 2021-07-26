const BaseCommand = require("../base/BaseCommand"); // Require the base command file
const { MessageEmbed, version, MessageActionRow, MessageButton } = require("discord.js");

module.exports = class Info extends BaseCommand {
    // Create the info command
    constructor() {
        super("info"); // Register the command
    }
    async run(client, interaction) {
        const ping = Math.floor(interaction.createdTimestamp - Date.now());

        const embed = new MessageEmbed()
            .setTitle("Stats du bot :robot: !")
            .setAuthor(
                "Fait par Yan Jobs#0001",
                "https://cdn.discordapp.com/avatars/735538297815957584/a_e593eb0e48bc5df126a12f2d74fc29be.gif"
            )
            .setTimestamp()
            .setColor("#12ff35")
            .setThumbnail("https://cdn.discordapp.com/avatars/867742620301525003/9a363f321e604daed218c82b79497655.png?size=256")
            .addFields(
                {
                    name: ":ping_pong: Mon ping:",
                    value: `${ping} ms`,
                    inline: true
                },
                {
                    name: ":gear: Ram usage:",
                    value: `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB\``,
                    inline: true
                },
                {
                    name: "<:version:869152031976349706> Version:",
                    value: `NodeJS: \`${process.version}\`\nDiscordJS: \`${version}\``,
                    inline: true
                },
                {
                    name: ":postal_horn: Informations !",
                    value: "Ce bot a été créé par amour par un développeur français nommé Yan. Vous pouvez le contacter sur discord: Yan Jobs#0001.\n Le bot est 100% open-source et vous pouvez consultez son code en cliquant sur le bouton en bas :arrow_down:"
                }
                /*        {
                            name: ":clock1: Uptime since:",
                            /!*value: `${moment(process.uptime()).format("[the] Do [of] MMMMM YYYY")}`*!/
                        }*/
            );
        const row = new MessageActionRow().addComponents(
            new MessageButton()
                .setLabel("Le GitHub")
                .setStyle("LINK")
                .setURL("https://github.com/Yan-Jobs/feur-bot")
        );

        interaction.reply(
            {
                content: "<@" + interaction.user.id + "> Et voilà !",
                embeds: [embed],
                components: [row],
            }
        )
    }


};
