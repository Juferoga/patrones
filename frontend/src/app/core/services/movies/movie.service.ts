import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '@models/movies/movies.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  headers = new HttpHeaders();

  constructor(
    private http: HttpClient
  ) { 
    this.headers = this.headers.append("Content-Type", "application/json");
  }

  getMovies():Observable<Movie[]> {
    return this.http.get<Movie[]>(
      environment.api+"movie/",
      {headers: this.headers}
    )
  }
  getMovie(id:number):Observable<Movie>{
    return this.http.get<Movie>(
      environment.api + 'movie/'+id +"/",
      {headers: this.headers}
    )
  }
}
