export default class Mailer {
  MODULE_NAME = "Mailer prompt";
  MODULE_DESCRIPTION = "Prompts for nano.mods mail ID and sends test message";
  MODULE_VERSION = "1.0";
  MODULE_MAIL_ID = "mailer@nano.mods";
  MODULE_MAIN = () => {
    this.promptForMailId();
  };

  async promptForMailId() {
    const mailId = await this.MODULE_OUTPUT.prompt("Mail ID", true);
    const isSent = await this.MODULE_MAIL.send({
      to: mailId,
      from: this.MODULE_MAIL_ID,
      message: "Test",
      data: {
        epoch: Date.now(),
      },
    });
    if(isSent) {
      this.MODULE_OUTPUT.printLine(`Sent to ${mailId}`)
    } else {
      this.MODULE_OUTPUT.printLine(`Not sent to ${mailId}`)
    }
    await this.promptForMailId();
  }
}
