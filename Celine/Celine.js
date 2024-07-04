export default class Celine {
  MODULE_NAME = "Celine Module";
  MODULE_DESCRIPTION = "Receives message and reply back";
  MODULE_VERSION = "1.0";
  MODULE_PULSE = true;
  MODULE_CHANNEL_ID = "celine@nano.mods";

  MODULE_MAIN = (o) => {
    o.channel.onReceive(this.MODULE_CHANNEL_ID, ({ message, from }) => {
      o.printLine(`${from}: ${message}`);
      o.channel.send({
        from: this.MODULE_CHANNEL_ID,
        to: "bob@nano.mods",
        message: parseInt(message) + 1,
      });
    });
  };
}
