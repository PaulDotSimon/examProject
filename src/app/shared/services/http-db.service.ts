import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Purchases } from '../interfaces/purchases';

@Injectable({
  providedIn: 'root'
})
export class HttpDBService {

  constructor(private http: HttpClient) { }

  getPurchases(): Promise<any>{
    return this.http.get(`${environment.dbURL}/purchases`).toPromise();
  }
  getPurchase(id:number): Promise<any>{
    return this.http.get(`${environment.dbURL}/purchases`+`/${id}`).toPromise();
  }
  postPurchases(data: Purchases){
    return this.http.post(`${environment.dbURL}/purchases`,data).toPromise();
  }
  deletePurchases(id:number){
    return this.http.delete(`${environment.dbURL}/purchases` + `/${id}`).toPromise();
  }
  editPurchases(id:number,data:Purchases){
    return this.http.patch(`${environment.dbURL}/purchases` + `/${id}`,data).toPromise();
  }
}
