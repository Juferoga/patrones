import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Show } from '@models/shows/show.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  headers = new HttpHeaders();

  constructor(
    private http: HttpClient
  ) { 
    this.headers = this.headers.append("Content-Type", "application/json");
  }

  getShow():Observable<Show[]>{
    return this.http.get<Show[]>(
      environment.api + 'function/',
      {headers: this.headers}
    )
  }

}
