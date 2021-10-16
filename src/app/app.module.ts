import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddFormComponent } from './ui/add-form/add-form.component';
import { PurchasesComponent } from './ui/purchases/purchases.component';
import { HeaderComponent } from './shared/header/header.component';
import { InformationComponent } from './shared/information/information.component';
import { PurchaseLayoutComponent } from './ui/purchase-layout/purchase-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    PurchasesComponent,
    HeaderComponent,
    InformationComponent,
    PurchaseLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
