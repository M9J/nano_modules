export default class Alice {
  MODULE_NAME = "Alice Module";
  MODULE_DESCRIPTION = "Sends message to Celine";
  MODULE_VERSION = "1.0";
  MODULE_PULSE = true;
  MODULE_CHANNEL_ID = "alice@nano.mods";

  MODULE_MAIN = (o) => {
    o.channel.onReceive(this.MODULE_CHANNEL_ID, ({ message, data, from }) => {
      o.printLine(`${from}: ${message}, ${data.alice}`);
      o.channel.send({
        from: this.MODULE_CHANNEL_ID,
        to: "celine@nano.mods",
        message: parseInt(message) + 1,
        data: {
          ...data,
          alice: data.alice + 1
        }
      });
    });
  };
}
