import {Page} from 'ionic-angular';
import {HelloIonicPage} from '../hello-ionic/hello-ionic';
import {LoginPage} from '../login/login';
import {ListPage} from '../list/list';

import {Type} from 'angular2/core';

@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  tab1Root: any = HelloIonicPage;
  tab2Root: any = LoginPage;
  tab3Root: Type = ListPage;

  constructor() {

  }
}
