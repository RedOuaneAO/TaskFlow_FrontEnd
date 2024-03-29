import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  getAllUsers(): Observable<any> {
    return this.http.get(environment.apiURL+'users');
  }
  getUserTokens(): Observable<any> {
    return this.http.get(environment.apiURL+'tokens');
  }
}
