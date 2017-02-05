import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Repo } from '../../models/repo';
import { GithubUsers } from '../../providers/github-users';

/*
  Generated class for the UserReposPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-repos-page',
  templateUrl: 'user-repos-page.html'
})
export class UserReposPage {
  public starIcon: string = 'star-outline';
  repos: Repo[];
  login: string;
  public starred: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsers: GithubUsers) {

    this.login = navParams.get('login');
    // this.login = login;
    githubUsers.loadUserRepos(this.login).subscribe(repos => {
      
      this.repos = repos;
      this.repos.map(repo=> {
        repo.starred = this.starred;
      });
      // this.repos.starIcon = 'star-outline';
      this.repos.sort(function (name1, name2) {
        if (name1.stargazers_count < name2.stargazers_count) {
          return 1;
        } else if (name1.stargazers_count > name2.stargazers_count) {
          return -1;
        } else {
          return 0;
        }
      });
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserReposPage');
    // this.starIcon = 'star-outline';
  }
  public changeIcon(item): void {
    // console.log(item);
    // item.starIcon = 'star';
    item.starred = !item.starred;
  }
}
