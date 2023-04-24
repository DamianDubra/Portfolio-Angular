import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from '../class/new-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://localhost:4200/auth';


  constructor(private httpClient: HttpClient) { 

public new(newUser: NewUser):Observable<any>{
  return this.httpClient.post<any>(this.)
}

  }
}
