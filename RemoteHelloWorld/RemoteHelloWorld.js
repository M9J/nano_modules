export default class RemoteHelloWorld {
  MODULE_NAME = "Hello World (Remote)";
  MODULE_DESCRIPTION = "Remote module load test";
  MODULE_VERSION = "1.0";
  MODULE_MAIN = () => {
    this.MODULE_OUTPUT.print("Hello world from remote module");
  };
}
