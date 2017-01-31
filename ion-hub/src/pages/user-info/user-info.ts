import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';
import { GithubUsers } from '../../providers/github-users';
import { UserReposPage } from '../user-repos-page/user-repos-page';
/*
  Generated class for the UserInfo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-info',
  templateUrl: 'user-info.html'
})
export class UserInfoPage {
  user: User;
  login: string;
  constructor(public navCtrl: NavController, private navParams: NavParams, private githubUsers: GithubUsers) {
    this.login = navParams.get('login');
    githubUsers.loadInfo(this.login).subscribe(user =>{
      this.user = user;
      console.log(user);
    })
  }
  viewUserRepos(login: string){
    console.log(login);
    
    this.navCtrl.push(UserReposPage, {login});
  }

}
