import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ThemeableBrowser } from '@ionic-native/themeable-browser';

@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
  selectedItem:any;
  imgs:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private themeableBrowser:ThemeableBrowser ) {
	this.selectedItem = this.navParams.get("item");
	if(this.selectedItem.SmallImages){
		this.imgs = this.selectedItem.SmallImages;
	}
  }
  goBuy(){
  	const options = {
  		statusbar:{
  			color:'#f8285c'
  		},
  		toolbar:{
  			height:44,
  			color:'#f8285c'
  		},
  		title:{
  			color:'#ffffffff',
  			showPageTitle:true
  		},
  		backButton:{
  			image:'back',
  			imagePressed:'back_pressed',
  			align:'left',
  			event:'backPressed'
  		},
  		backButtonCanClose:true
  	};
  	this.themeableBrowser.create('https://www.baidu.com', '_blank', options);
  }
}
