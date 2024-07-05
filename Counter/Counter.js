export default class Counter {
  MODULE_NAME = "Counter";
  MODULE_DESCRIPTION = "Counts from zero";
  MODULE_VERSION = "1.0";
  MODULE_PULSE = true;
  MODULE_MAIN = () => {
    let c = 0;
    setInterval(() => {
      this.MODULE_OUTPUT.print(++c);
    }, 100);
  };
}
