import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Pages
import { OrderListPage } from './../order-list/order-list';
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
	public orderList: Array<Object> = [];

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
		console.log('Agregados: ' + (this.press++ + 1));

		this.orderList.push({
			descripcionProducto: product.descripcionProducto,
			total: product.precioProducto * product.cantidad,
		});
	}

	displayOrder() {
		console.dir(this.orderList);
		this.navCtrl.push(OrderListPage, {
			orderList: this.orderList,
		});
		this.clearOrder();
	}

	clearOrder() {
		this.orderList = [];
		console.log(this.orderList);
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
