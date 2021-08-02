import {
  Component,
  OnInit,
  Input,
  HostBinding,
  AfterContentInit,
  SimpleChanges,
  ViewChild,
  ElementRef
} from '@angular/core';
import { CardType, CARD_IMAGE_PATH } from './model';

@Component({
  selector: 'CreditCard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditCardComponent {
  @Input() name: string;
  @Input() lastDigits: string;
  @Input() expirationDate: string;
  @Input() flag: string;

  public getCardImage = (card: string) =>
    ({ backgroundImage: `url(${CARD_IMAGE_PATH}${card.toLowerCase()}.svg)` });
}
