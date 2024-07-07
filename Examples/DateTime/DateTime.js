export default class DateTime {
  MODULE_NAME = "Today's Date and Time";
  MODULE_DESCRIPTION = "Prints and updates today's date and time";
  MODULE_VERSION = "0.1";
  MODULE_PULSE = true;
  MODULE_MAIN = () => this.dateTime();

  dateTime() {
    setInterval(() => {
      this.MODULE_OUTPUT.print(new Date().toLocaleString());
    }, 1000);
  }
}
