import { Component,ViewChild, ChangeDetectorRef } from '@angular/core';
import { NavController,ActionSheetController,Platform } from 'ionic-angular';
import { AppService, AppGlobal } from '../../app/app.service';
import { AppShare } from './../../app/app.share';
import { ProductListPage } from '../product-list/product-list';
import { Content } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[AppShare]
})
export class HomePage {
  @ViewChild(Content) content: Content;
  slides: Array<any> = [];
  categories: Array<any> = [];
  products: Array<any> = [];

  spinner1: boolean = true;
  toTop:boolean = false;
  top = false;
  loop = false;

  params = {
    favoritesId: 2054400,
    pageNo: 1,
    pageSize: 20
  }
  constructor(public appService: AppService,public navCtrl: NavController,
    public appShare:AppShare,public actionSheetCtrl:ActionSheetController,
    public platform: Platform,private cd: ChangeDetectorRef) {
	  this.getSlides();
    this.getCategories();
    this.getProducts();
  }
  //获取幻灯片
  getSlides() {
    var params = {
      favoritesId: 2056439,
      pageNo: 1,
      pageSize: 5
    }
    this.appService.httpGet(AppGlobal.API.getProducts, params, rs => {
      console.debug(rs);
      this.slides = rs.data;
      this.spinner1 = false;
      this.loop = true;
    })
  }
  //获取分类
  getCategories() {
    this.appService.httpGet(AppGlobal.API.getCategories, { appTag: 'dress' }, rs => {
      console.debug(rs);
      this.categories = rs.data;
    })
  }
  //获取首页推荐列表
  getProducts() {
    this.appService.httpGet(AppGlobal.API.getProducts, this.params, rs => {
      console.debug(rs);
      this.products = rs.data;
    })
  }
  //商品详情
  goDetails(item) {
    console.debug('go details...')
  }

  goProductList(item){
    this.navCtrl.push(ProductListPage,{item:item})
  }

  /* scrollIntoView(){
    let element = document.getElementById("topest");
    if(element){
      element.scrollIntoView();
    }
  }

  scrollToTop() {
    this.content.scrollToTop();
  } */
  scrollTo(){
    
    this.content.scrollTo(0, 0, 300)
  }
  check(){
      let div = document.getElementById('div');
      if(this.content.scrollTop>200){
        //this.toTop = true;
        //this.top = true;
        div.className = "show"
      }else{
        //this.top = false;
        /*setTimeout(function(){
          HomePage.prototype.change()
        },4000);*/
        //this.change();
        //this.toTop = false
        div.className = "hide"
      }
      this.cd.detectChanges();
  }

  share(event) {
    let actionSheet = this.actionSheetCtrl.create({
    title: '分享App到：',
    buttons: [
        {
          text: 'QQ好友',
          handler: () => {
            this.appShare.qqShare(0)
          }
        },
        {
          text: 'QQ空间',
          handler: () => {
            this.appShare.qqShare(1)
          }
        },
       {
        text: '微信好友',
        handler: () => {
            this.appShare.wxShare(0)
        }
        },
        {
        text: '朋友圈',
        handler: () => {
            this.appShare.wxShare(1)
        }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
    ]
    });
    actionSheet.present();
  }  
  test(){
    alert(this.toTop);
    console.log("test中");
    console.log(this.toTop);
  }
  change(){
    this.toTop = false;
    console.log("change");
    console.log(this.toTop);
  }
}
