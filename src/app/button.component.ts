import {
  Component,
  OnInit,
  Input,
  HostBinding,
  SimpleChanges,
} from "@angular/core";
import { css } from "@emotion/css";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "Button",
  template: ` <ng-content></ng-content> `,
})
export class ButtonComponent implements OnInit {
  @HostBinding("class") className;
  @Input() customStyle: string;
  @Input() variant: string;
  @Input() small: boolean;
  @Input() disable: boolean;
  defaultInputs = new BehaviorSubject<any>({
    small: false,
    disable: false,
    variant: "red",
  });

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    const inputs = Object.keys(changes).reduce(function (result, item) {
      result[item] = changes[item].currentValue;
      return result;
    }, {});
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...inputs });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }

  getDynamicStyle(inputs) {
    return css`
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      ${inputs.variant === "red" &&
      css`
        background-color: #f44336;
      `}
      ${inputs.variant === "green" &&
      css`
        background-color: #4caf50;
      `}
      ${inputs.small &&
      css`
        padding: 5px 10px;
      `}
      ${inputs.disable &&
      css`
        cursor: not-allowed;
        pointer-events: none;
        opacity: 0.3;
      `}
    `;
  }

  ngOnInit() {
    const { customStyle, ...others } = this;
    this.defaultInputs.next({ ...this.defaultInputs.getValue(), ...others });
    this.className = `${this.getDynamicStyle(this.defaultInputs.getValue())}`;
  }
}
