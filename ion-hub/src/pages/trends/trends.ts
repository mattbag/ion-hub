import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Repo } from '../../models/repo';
import { GithubTrends } from '../../providers/github-trends';
/*
  Generated class for the Trends page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-trends',
  templateUrl: 'trends.html'
})
export class TrendsPage {
  selectedTrend: string;
  repos: Repo[];
  inf_repos: any[];
  reactRepos: Repo[];
  angularRepos: Repo[];
  vueRepos: Repo[];
  // originalRepos: Repo[];


  constructor(public navCtrl: NavController, public navParams: NavParams, private githubTrends: GithubTrends) {
    githubTrends.load().subscribe(repos => {
      this.repos = repos;
      this.reactRepos = [];
      for (let i = 0; i < 10; i++) {
        this.reactRepos.push(this.repos[i]);
      }
    })
     githubTrends.loadAngular().subscribe(repos => {
      this.repos = repos;
      this.angularRepos = [];
      for (let i = 0; i < 10; i++) {
        this.angularRepos.push(this.repos[i]);
      }
    })
     githubTrends.loadVue().subscribe(repos => {
      this.repos = repos;
      this.vueRepos = [];
      for (let i = 0; i < 10; i++) {
        this.vueRepos.push(this.repos[i]);
      }
    })
    this.selectedTrend = "react";
  }


  changeTrend(value) {
    console.log(value);
  }
}
