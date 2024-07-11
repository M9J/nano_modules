export default class Calculator {
  MODULE_NAME = "Calculator";
  MODULE_DESCRIPTION = "A simple calculator";
  MODULE_VERSION = "1.0";
  MODULE_MAIN = () => {
    this.calculate();
  };
  
  async calculate() {
    const num1 = await this.MODULE_OUTPUT.prompt("Number 1", true);
    const num2 = await this.MKDULE_OUTPUT.prompt("Number 2", true);
    const result = +num1 + +num2;
    this.MODULE_OUTPUT.print(`${num1} + ${num2} = ${result}`);
    this.calculate();
  }

}
