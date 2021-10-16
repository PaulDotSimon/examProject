import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from '../add-form/add-form.component';
import { PurchaseLayoutComponent } from '../purchase-layout/purchase-layout.component';
import { PurchasesComponent } from '../purchases/purchases.component';

const routes: Routes = [
  {
    path:"",
    component: PurchaseLayoutComponent,
    children :[
      {
        path:"", component: PurchasesComponent
      },
      {
        path:"item",component: AddFormComponent
      },
      {
        path:"item/:id",component:AddFormComponent
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseModuleRoutingModule { }
