import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private authenticatedToken = '';
  
  public get activeAuthenticatedToken() : string {
    return this.authenticatedToken;
  }
  
  public set activeAuthenticatedToken(token : string) {
    this.authenticatedToken = token;
  }

  constructor(private http: HttpClient) { }

  refreshAuthenticationToken() {
    return this.http.post('', {}, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).subscribe(authTokenRes => {

    }, onerror => {

    });
  }
}
