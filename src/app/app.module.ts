import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SortPipe } from '../pipes/sortPipe';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrgsPage } from '../pages/orgs/orgs';
import { UserInfoPage } from '../pages/user-info/user-info';
import { UserReposPage } from '../pages/user-repos-page/user-repos-page';
import { TrendsPage } from '../pages/trends/trends';

import { GithubUsers } from '../providers/github-users';
import { GithubRepos } from '../providers/github-repos';
import { GithubOrgs } from '../providers/github-orgs';
import { GithubTrends } from '../providers/github-trends';

@NgModule({
  declarations: [
    MyApp,
    SortPipe,
    UsersPage,
    ReposPage,
    OrgsPage,
    UserInfoPage,
    UserReposPage,
    TrendsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    ReposPage,
    OrgsPage,
    UserInfoPage,
    UserReposPage,
    TrendsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
  GithubUsers, GithubRepos, GithubOrgs, GithubTrends
  ]
})
export class AppModule {}
