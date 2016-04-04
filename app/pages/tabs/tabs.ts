import {Page} from 'ionic-angular';
import {HelloIonicPage} from '../hello-ionic/hello-ionic';

import {Type} from 'angular2/core';

@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  tab1Root: any = HelloIonicPage;
  tab2Root: any = HelloIonicPage;
  //tab3Root: Type = HelloIonicPage;

  constructor() {

  }
}
