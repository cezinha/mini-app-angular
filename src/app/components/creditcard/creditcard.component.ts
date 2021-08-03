import { Component, Input } from "@angular/core";
import { CARD_IMAGE_PATH } from "./model";

@Component({
  selector: "CreditCard",
  templateUrl: "./creditcard.component.html",
  styleUrls: ["./creditcard.component.css"],
})
export class CreditCardComponent {
  @Input() name: string;
  @Input() lastDigits: string;
  @Input() expirationDate: string;
  @Input() flag: string;

  public getCardImage = (card: string) => ({
    backgroundImage: `url(${CARD_IMAGE_PATH}${card.toLowerCase()}.svg)`,
  });
}
