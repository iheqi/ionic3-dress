import { Component,ViewChild } from '@angular/core';
import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
//使用懒加载，只需要将之前的页面名字用引号引起来即可，也不需要在顶部进行import导入
import { HomePage } from '../home/home';
import { BackButtonService } from "../../app/backButton.service";

import { Tabs,Platform } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html',
  providers:[BackButtonService]
})
export class TabsPage {
  @ViewChild("myTabs")tabRef:Tabs;
  
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = 'ContactPage';

  constructor(platform:Platform,backButtonService:BackButtonService) {
  	platform.ready().then(() => {
        backButtonService.registerBackButtonAction(this.tabRef);
    });
  }
}
