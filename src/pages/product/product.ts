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
	// tslint:disable-next-line:no-inferrable-types
	press: number = 0;
	public products: any;
	public checkedProducts: Array<any> = [];

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

	pressEvent(product) {
		console.log(this.press++);
		this.checkedProducts.push(product.descripcionProducto, product.precioProducto, product.cantidad);
	}

	displayOrder() {
		console.log(this.checkedProducts);
	}

	clearOrder() {
		this.checkedProducts = [];
		console.log(this.checkedProducts);
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
