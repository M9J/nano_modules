export default class Bob {
  MODULE_NAME = "Bob Module";
  MODULE_DESCRIPTION = "Sends message to Alice";
  MODULE_VERSION = "1.0";
  MODULE_PULSE = true;
  MODULE_CHANNEL_ID = "bob@nano.mods";

  MODULE_MAIN = (o) => {
    
    o.channel.onReceive(this.MODULE_CHANNEL_ID, ({ message, data, from }) => {
      o.printLine(`${from}: ${message}, ${data.bob}`);
        o.channel.send({
          from: this.MODULE_CHANNEL_ID,
          to: "alice@nano.mods",
          message: parseInt(message) + 1,
          data: {
            ...data,
            bob: data.bob + 1
          }
        });
    });
    
    o.channel.send({
      from: this.MODULE_CHANNEL_ID,
      to: "alice@nano.mods",
      message: "1",
      data: {
        bob: 1
      }
    });

  };
}
