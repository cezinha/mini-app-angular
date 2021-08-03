import { Component, Input } from "@angular/core";

@Component({
  selector: "TransactionLine",
  templateUrl: "./transactionline.component.html",
  styleUrls: ["./transactionline.component.css"],
})
export class TransactionLineComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() price: string;
}
