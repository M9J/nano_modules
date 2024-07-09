export default class Name {
  MODULE_NAME = "Name prompt";
  MODULE_DESCRIPTION = "Prompts for name";
  MODULE_VERSION = "1.0";
  MODULE_MAIN = () => {
    const nameInput = document.createElement("input");
    nameInput.onchange = (e) => {
      this.MODULE_OUTPUT.printLine(JSON.stringify(e));
    }
    this.MODULE_OUTPUT.print(nameInput.toString());
  };
}
