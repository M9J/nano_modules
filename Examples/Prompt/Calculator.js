export default class Calculator {
  MODULE_NAME = "Calculator";
  MODULE_DESCRIPTION = "A simple calculator";
  MODULE_VERSION = "1.0";
  MODULE_MAIN = () => {
    const divMain = document.createElement("div");
    const divRow1 = document.createElement("div");
    const num1 = document.createElement("input");
    num1.type = "text";
    const plus = document.createElement("span");
    plus.innerHTML = "+";
    const num2 = document.createElement("input");
    num2.type = "text";
    const button = document.createElement("button");
    button.innerHTML = "Calculate";
    button.onclick = () => {
      const value = +num1.value + +num2.value;
      this.MODULE_OUTPUT.print(value);
    }
    divRow1.appendChild(num1);
    divRow1.appendChild(plus);
    divRow1.appendChild(num2);
    divMain.appendChild(divRow1);
    divMain.appendChild(button);
    this.MODULE_OUTPUT.printElement(divMain);
  };

}
