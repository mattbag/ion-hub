import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Repo } from '../models/repo';
/*
  Generated class for the GithubRepos provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GithubRepos {
  githubApiUrl = 'https://api.github.com';

  constructor(public http: Http) { }

  // Load all github repos
  // search?q=stars%3A>1&s=stars&type=Repositories
  // https://api.github.com/search/repositories?q=sort=stars&order=desc
  load(): Observable<Repo[]> {
    return this.http.get(`${this.githubApiUrl}/search/repositories?q=stars:>1000`)
      .map(res => <Repo[]>res.json().items);
  }
//   // load user info
//   loadInfo(login: string): Observable<User> {
//     return this.http.get(`${this.githubApiUrl}/users/${login}`)
//       .map(res => <User>(res.json()))
//   }
  searchRepos(searchParams: string): Observable<Repo[]>{
     return this.http.get(`${this.githubApiUrl}/search/repositories?q=${searchParams}`)
      .map(res => <Repo[]>res.json().items);
  }
//   // load user repos
//    loadUserRepos(login: string): Observable<Repo[]> {
//     return this.http.get(`${this.githubApiUrl}/users/${login}/repos`)
//       .map(res => <Repo[]>(res.json()))
//   }
  
}
