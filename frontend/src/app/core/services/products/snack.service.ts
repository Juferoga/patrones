import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Snack } from '@models/products/products.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  headers = new HttpHeaders();

  constructor(
    private http: HttpClient
  ) { 
    this.headers = this.headers.append("Content-Type", "application/json");
  }

  getSnacks():Observable<Snack[]>{
    return this.http.get<Snack[]>(
      environment.api + 'product/snacks/',
      {headers: this.headers}
    )
  }
  getSnack(id:number):Observable<Snack>{
    return this.http.get<Snack>(
      environment.api + 'product/snacks/'+id+'/',
      {headers: this.headers}
    )
  }
}
