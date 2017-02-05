import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Org } from '../models/org';
/*
  Generated class for the GithubOrgs provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubOrgs {
  githubApiUrl = 'https://api.github.com';

  constructor(public http: Http) { }

  // Load all github repos
  load(): Observable<Org[]> {
    return this.http.get(`${this.githubApiUrl}/organizations`)
      .map(res => <Org[]>res.json());
  }
//   // load user info
//   loadInfo(login: string): Observable<User> {
//     return this.http.get(`${this.githubApiUrl}/users/${login}`)
//       .map(res => <User>(res.json()))
//   }
  searchOrgs(searchParams: string): Observable<Org[]>{
     return this.http.get(`${this.githubApiUrl}/search/organizations?q=${searchParams}`)
      .map(res => <Org[]>res.json().items);
  }
//   // load user repos
//    loadUserOrgs(login: string): Observable<Org[]> {
//     return this.http.get(`${this.githubApiUrl}/users/${login}/repos`)
//       .map(res => <Org[]>(res.json()))
//   }
  
}
