export default class Bob {
  MODULE_NAME = "Bob Module";
  MODULE_DESCRIPTION = "Sends message. Also reply back";
  MODULE_VERSION = "1.0";
  MODULE_PULSE = true;
  MODULE_CHANNEL_ID = "bob@nano.mods";

  MODULE_MAIN = (o) => {
    o.channel.onReceive(this.MODULE_CHANNEL_ID, ({ message, from }) => {
      o.printLine(`${from}: ${message}`);
      let tmr1 = setTimeout(() => {
        clearTimeout(tmr1);
        o.channel.send({
          from: this.MODULE_CHANNEL_ID,
          to: "alice@nano.mods",
          message: parseInt(message) + 1,
        });
      }, 1000);
    });
    let tmr = setTimeout(() => {
      clearTimeout(tmr);
      console.log("message sent");
      o.channel.send({
        from: this.MODULE_CHANNEL_ID,
        to: "alice@nano.mods",
        message: "1",
      });
    }, 1000);
  };
}
