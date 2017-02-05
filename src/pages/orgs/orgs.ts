import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {Org} from '../../models/org';
import {GithubOrgs} from '../../providers/github-orgs';


/*
  Generated class for the Orgs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-orgs',
  templateUrl: 'orgs.html'
})
export class OrgsPage {
  orgs: Org[];
  // inf_repos: any[];
  // originalRepos: Repo[];


  constructor(public navCtrl: NavController, public navParams: NavParams, private githubOrgs: GithubOrgs) {
  githubOrgs.load().subscribe(orgs =>{
      this.orgs = orgs;
  // this.orgs.sort( function(name1, name2) {
	//     if ( name1.stargazers_url.length < name2.stargazers_url.length ){
	//     	return 1;
	//     }else if( name1.stargazers_url.length > name2.stargazers_url.length ){
	//         return -1;
	//     }else{
	//     	return 0;	
	//     }
	// });

    //   this.inf_repos = [];
    // for (let i = 0; i < 10; i++) {
    //   this.inf_repos.push( this.repos[i] );
    // }
    })
  }

  // doInfinite(infiniteScroll) {
  //   console.log('Begin async operation');

  //   setTimeout(() => {
  //     var inf_len = this.inf_repos.length;
  //   for (let i = inf_len; i < inf_len+10; i++) {
  //     this.inf_repos.push( this.repos[i] );
  //   }

  //     console.log('Async operation has ended');
  //     infiniteScroll.complete();
  //   }, 500);
  // }

//  search(searchEvent){
//     let term = searchEvent.target.value;

//     if(term.trim() === '' || term.trim().length < 3){
//       this.inf_repos = this.repos;
//     }else{
//        this.githubRepos.searchRepos(term).subscribe(repos => {
//         this.inf_repos = repos;
//       });

//     }
//   }
  

}
