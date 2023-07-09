import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '@models/products/products.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  headers = new HttpHeaders();

  constructor(
    private http: HttpClient
  ) { 
    this.headers = this.headers.append("Content-Type", "application/json");
  }

  getTickets():Observable<Ticket[]>{
    return this.http.get<Ticket[]>(
      environment.api + 'product/ticket/',
      {headers: this.headers}
    )
  }
  getTicket(id:number):Observable<Ticket>{
    return this.http.get<Ticket>(
      environment.api + 'product/ticket/'+id+'/',
      {headers: this.headers}
    )
  }
}
