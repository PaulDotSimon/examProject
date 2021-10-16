import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Purchases } from 'src/app/shared/interfaces/purchases';
import { HttpDBService } from 'src/app/shared/services/http-db.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  constructor(private httpDBService: HttpDBService, private router: Router) { }
  purchases: Purchases[];
  purchase: Purchases;

  ngOnInit(): void {
    this.getPurchases();
  }
  linkToItem(id?: number) {
    if (id) {
      this.router.navigate([this.router.url, 'item', id]);
    } else {
      this.router.navigate([this.router.url, 'item']);
    }
  }

  async getPurchases() {
    try {
      this.purchases = await this.httpDBService.getPurchases();
    } catch (err) {
      console.error(err);
    }
    this.sortPurchaseByAlphabet();
    this.sortPurchaseByStatus();
  }
  async onDeletePurchase(index: number) {
    try {
      await this.httpDBService.deletePurchases(index);
    } catch (err) {
      console.error(err);
    }
    this.getPurchases();
  }
  async changeStatus(index: number) {
    try {
      this.purchase = await this.httpDBService.getPurchase(index);

      if (this.purchase.status == "Не куплено") {
        let purchase: Purchases = {
          name: this.purchase.name,
          amount: this.purchase.amount,
          status: "Куплено",
          bought: true
        }
        await this.httpDBService.editPurchases(index,purchase)
      }
      else {
        let purchase: Purchases = {
          name: this.purchase.name,
          amount: this.purchase.amount,
          status: "Не куплено",
          bought: false
        }
        await this.httpDBService.editPurchases(index,purchase)
      }
      this.getPurchases();
    } catch (error) {
      console.log(error);
      return;
    }
  }

  sortPurchaseByAlphabet(){
    this.purchases.sort((a,b)=>{
      if(a.name > b.name) return 1;
      if(a.name < b.name) return -1;
      if (a.name && b.name == undefined) return -1;

      return 0;
    })
  }
  sortPurchaseByStatus(){
    this.purchases.sort((a,b)=>{
      if(a.status == "Куплено" && b.status == "Не куплено" ) return 1;
      if(a.status == "Не куплено" && b.status == "Куплено" ) return -1;
    })
  }
}
