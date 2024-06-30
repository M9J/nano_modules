export default class Counter {
  MODULE_NAME = "Counter";
  MODULE_DESCRIPTION = "Counts from zero";
  MODULE_VERSION = "1.0";
  MODULE_MAIN = (o) =>  {
    let c = 0;
    setInterval(() => {
      o(++c);
    }, 100);
    return c;
  };
}
