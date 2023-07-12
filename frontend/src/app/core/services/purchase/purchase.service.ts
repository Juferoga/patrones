import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Purchase } from '@models/purchase/purchase.model';
import { environment } from 'src/environments/environment.development';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  headers = new HttpHeaders();

  constructor(
    private http: HttpClient
  ) { 
    this.headers = this.headers.append("Content-Type", "application/json");
  }

  makePurchase(data:Purchase){
    return this.http.post<Purchase>(
      environment.api + 'purchase/sale-data/',
      data,
      {headers: this.headers}
    )
  }

  getPurchasePDF(data:number){
    this.http.get(environment.api + 'purchase/invoice/'+data+'/', {responseType: 'blob' as 'json'})
      .subscribe((res: any) => {
        var blob = new Blob([res], { type: 'application/pdf' });
        
        saveAs(blob, 'filename.pdf');
      });
  }
}
