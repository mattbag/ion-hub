import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../models/user';
import { GithubUsers } from '../../providers/github-users';
import { UserInfoPage} from '../user-info/user-info';
/*
  Generated class for the Users page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
users: User[];
originalUsers: User[];

  constructor(public navCtrl: NavController, private githubUsers: GithubUsers) {
    githubUsers.load().subscribe(users =>{
      
      // this.users = users;
      this.originalUsers = users;

      this.users = [];
    for (let i = 0; i < 10; i++) {
      this.users.push( users[i] );
    }
    })
  }
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      var inf_len = this.users.length;
    for (let i = inf_len; i < inf_len+10; i++) {
      this.users.push( this.users[i] );
    }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
  viewInfo(login: string){
    this.navCtrl.push(UserInfoPage, {login});
  }
  search(searchEvent){
    let term = searchEvent.target.value;

    if(term.trim() === '' || term.trim().length < 3){
      this.users = this.originalUsers;
    }else{
       this.githubUsers.searchUsers(term).subscribe(users => {
        this.users = users
      });

    }
  }
  onCancel(){
    // console.log('done');
    this.users = this.originalUsers;
  }

}
