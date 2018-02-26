import { AppService, AppGlobal } from './../../app/app.service';
import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams, } from 'ionic-angular';

@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {
  @ViewChild("header") header:Element;
  hasmore = true;
  products: any;
  selectedItem: any;

  spinner1: boolean = true;

  params = {
    pageNo: 1,
    favoritesId: 0,
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public appService: AppService) {
    this.selectedItem = this.navParams.get("item");
    this.params.favoritesId = this.selectedItem.FavoritesId;
  }

  ionViewDidLoad() {
    this.getFavoritesItems();
    console.log('ionViewDidLoad ProductListPage');
  }
  getFavoritesItems() {
    this.appService.httpGet(AppGlobal.API.getProducts, this.params, d => {
      this.products = d.data;
      this.params.pageNo += 1;
      this.spinner1 = false;
    });
  }

  doInfinite(infiniteScroll) {
    if (this.hasmore == false) {
      infiniteScroll.complete();
      return;
    }
    this.appService.httpGet(AppGlobal.API.getProducts,this.params, d => {
      if (d.data.length > 0) {
        this.products = this.products.concat(d.data);
        this.params.pageNo += 1;
      } else {
        this.hasmore = false;
        console.log("没有数据啦！")
      }
      infiniteScroll.complete();
    });
  }
  scrollIntoView(){
    let header = this.header;
    if(header){
      header.scrollIntoView();
    }
  } 
}