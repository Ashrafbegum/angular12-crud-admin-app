import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../users/list-users/list-users.component';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
   
  //This is the fake api that we are using to access data for crud operations
  baseUrl: string = 'https://jsonplaceholder.cypress.io/';
  constructor(private http: HttpClient) { }

  listUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl + 'users');
  }

  viewUser(id: string){
    return this.http.get(this.baseUrl + "users/" + id);
  }

  addUser(userObj: any){
     return this.http.post(this.baseUrl + "users", userObj);
  }

  deleteUser(id: string) {
    return this.http.delete(this.baseUrl + "users/" + id);
  }

  updateUser(id: string, userObj: any){
    return this.http.put(this.baseUrl + 'users/' + id, userObj)
  }
}
