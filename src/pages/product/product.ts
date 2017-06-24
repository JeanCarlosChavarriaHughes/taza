import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Providers
import { ProductProvider } from './../../providers/product/product';

@IonicPage()
@Component({
	selector: 'page-product',
	templateUrl: 'product.html',
})
export class ProductPage implements OnInit {
	public products: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, private productProvider: ProductProvider) {
	}

	ngOnInit() {
		this.getProducts();
	}

	getProducts() {
		this.productProvider.getProducts().subscribe(
			data => {
				this.products = data.json();
			},
			err => console.log(err),
			() => console.log('get products completed'),
		);
	}

	doRefresh(refresher) {
		console.log('Begin async operation', refresher);
		setTimeout(() => {
			this.getProducts();
			console.log('refresh completed');
			refresher.complete();
		}, 1000);
	}
}
