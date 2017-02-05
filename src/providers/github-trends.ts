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
export class GithubTrends {
  githubApiUrl = 'https://api.github.com';

  constructor(public http: Http) { }

  load(): Observable<Repo[]> {
    return this.http.get(`${this.githubApiUrl}/search/repositories?q=react&sort=stars`)
      .map(res => <Repo[]>res.json().items);
  }
  loadAngular(): Observable<Repo[]> {
    return this.http.get(`${this.githubApiUrl}/search/repositories?q=angular&sort=stars`)
      .map(res => <Repo[]>res.json().items);
  }
  loadVue(): Observable<Repo[]> {
    return this.http.get(`${this.githubApiUrl}/search/repositories?q=vue&sort=stars`)
      .map(res => <Repo[]>res.json().items);
  }

  
}
