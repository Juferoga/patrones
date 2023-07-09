import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Customer, Employee, User } from '../../models/users/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers = new HttpHeaders();

  constructor(
    private http: HttpClient
  ) { 
    this.headers = this.headers.append("Content-Type", "application/json");
  }

  getUserByUsername(username):Observable<User>{
    return this.http.get<User>(
      environment.api + 'user/'+username+'/',
      {headers: this.headers}
    )
  }
  getUser():Observable<User>{
    return this.http.get<User>(
      environment.api + 'user/me/',
      {headers: this.headers}
    )
  }
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(
      environment.api + 'user/get/',
      {headers: this.headers}
    )
  }
  setUser(usuario):Observable<User>{
    var body = JSON.stringify(usuario)
    return this.http.post<User>(
      environment.api + 'user/set/',
      body,
      {headers: this.headers}
    )
  }
  deleteUser(usuario):Observable<User>{
    var body = JSON.stringify(usuario)
    return this.http.post<User>(
      environment.api + 'user/del/',
      body,
      {headers: this.headers}
    )
  }

  getUsersEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(
      environment.api + 'user/employee/list/',
      {headers: this.headers}
    )
  }
  getUsersCustomer():Observable<Customer[]>{
    return this.http.get<Customer[]>(
      environment.api + 'user/customer/list/',
      {headers: this.headers}
    )
  }
  createUserEmp(usuario):Observable<User>{
    var body = JSON.stringify(usuario)
    return this.http.post<User>(
      environment.api + 'represent/create/',
      body,
      {headers: this.headers}
    )
  }
  createUserCli(usuario):Observable<User>{
    var body = JSON.stringify(usuario)
    return this.http.post<User>(
      environment.api + 'client/create/',
      body,
      {headers: this.headers}
    )
  }
}
