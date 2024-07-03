export default class Logger {
  MODULE_NAME = "Logger Example";
  MODULE_DESCRIPTION = "Shows the behavior of logger";
  MODULE_VERSION = "1.0";
  MODULE_PULSE = true;
  MODULE_MAIN = (o) => {
    let line = 0;
    line += 1;
    setInterval(() => {
      o.printLineBefore(`Log line ${line}`);
    }, 1000);
    return `Log line ${line}`;
  };
}
