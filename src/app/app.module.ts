import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ButtonComponent } from "./button.component";
import { CreditCardComponent } from "./components/creditcard/creditcard.component";
import { EmptyCardComponent } from "./components/emptycard/emptycard.component";
import { IconButtonComponent } from "./components/ui/iconbutton/iconbutton.component";
import { LimitBarComponent } from "./components/limitbar/limitbar.component";
import { TransactionLineComponent } from "./components/transactionline/transactionline.component";
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ButtonComponent,
    CreditCardComponent,
    EmptyCardComponent,
    IconButtonComponent,
    LimitBarComponent,
    TransactionLineComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}