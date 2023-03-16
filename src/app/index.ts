import {inputsAreValid} from './utils/inputs-are-valid';
import {parseInputs} from './utils/parse-inputs';
const runApp = (alertService: any, componentService: any) => {
  alertService.hideErrors();

  componentService.onClick(() => {
    alertService.hideErrors();
    const inputs = componentService.getInputs();
    const parsedInputs = parseInputs(...inputs);
    if (inputsAreValid(...parsedInputs)) {
      const [numA, numB] = parsedInputs;
      componentService.setResult(numA + numB);
    } else {
      componentService.setResult('');
      alertService.handleAdditionError(inputs, parsedInputs);
    }
  });
};

export class AlertService {
  errorBox: HTMLElement

  constructor() {
    this.errorBox = document.getElementById("error");
  }

  handleAdditionError(inputs: number[], numbers: number[]) {
    const fullMessage = inputs.reduce((message, str, index) => {
      if (inputsAreValid(numbers[index])) {
        return message + "";
      } else {
        return message + `${str} is not a number. `;
      }
    }, "Please enter two valid numbers! ");

    this.errorBox.classList.remove("invisible");
    this.errorBox.innerText = fullMessage;
  }

  hideErrors() {
    this.errorBox.classList.add("invisible");
  }
}

export class ComponentService {
  numberOneInput: HTMLInputElement;
  numberTwoInput: HTMLInputElement;
  addValuesButton: HTMLElement;
  resultDiv: HTMLElement;

  constructor() {
    this.numberOneInput = document.getElementById('numberOne') as HTMLInputElement;
    this.numberTwoInput = document.getElementById('numberTwo') as HTMLInputElement;
    this.addValuesButton = document.getElementById('addValues');
    this.resultDiv = document.getElementById('result');
  }

  getInputs() {
    return [this.numberOneInput.value, this.numberTwoInput.value];
  }

  setResult(str: string) {
    this.resultDiv.innerText = str;
  }

  onClick(cb: () => void) {
    this.addValuesButton.addEventListener('click', cb);
  }
}

export default runApp