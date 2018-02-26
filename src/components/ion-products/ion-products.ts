import { NavController } from 'ionic-angular';
import { Component, Input } from '@angular/core';
import { ProductDetailsPage } from '../../pages/product-details/product-details';
@Component({
  selector: 'ion-products',
  templateUrl: 'ion-products.html'
})
export class IonProductsComponent {
  @Input() products: Array<any>;
  /*声明可以通过属性绑定更新的输入属性（示例：
 <ion-products [products]="products"></ion-products>）*/

  constructor(public navCtrl: NavController) {
    console.log('Hello IonProducts Component');
  }
  
  goDetails(item) {
    this.navCtrl.push(ProductDetailsPage,{item:item});
  }
} 