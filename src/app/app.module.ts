import { Injector, NgModule } from "@angular/core";
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
import { APP_BASE_HREF } from "@angular/common";
import { createCustomElement } from "@angular/elements";
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
  providers: [],
  bootstrap: []
})
export class AppModule { 
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('mfe1-element', ce);
  }
}