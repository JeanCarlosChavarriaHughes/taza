import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, ModalController, Events, AlertController } from 'ionic-angular';

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
	public products: any;
	public orderList: Array<Object> = [];
	public clientSelected: any;
	// tslint:disable-next-line:no-inferrable-types
	private press: number = this.orderList.length;

	constructor(
		public alertCtrl: AlertController,
		public navParams: NavParams,
		private productProvider: ProductProvider,
		private modalCtrl: ModalController,
		private events: Events) {
		events.subscribe('tab-client', (tab, client) => {
			this.clientSelected = client;
		});
		events.subscribe('unselectClient', (clientState) => {
			this.clientSelected = clientState;
		});
	}

	ngOnInit() {
		this.getProducts();
	}

	getProducts() {
		this.productProvider.getProducts().subscribe(
			data => {
				this.products = data.json();
			},
			err => console.error(err),
			() => console.log('get products completed'),
		);
	}

	addProduct(product) {
		// if (isNaN(product.cantidad)) {
		// 	product.cantidad = 1;
		// } else {
		// 	product.cantidad++;
		// }
		if (product.checked === true) {
			// console.log('Agregados: ' + (this.press++ + 1));
			console.log('Agregados: ' + (this.press = this.orderList.length + 1));
			this.orderList.push({
				cantidad: product.cantidad,
				descripcionProducto: product.descripcionProducto,
				estado: product.checked = true,
				id: product.idProducto,
				total: product.precioProducto * product.cantidad,
			});
		} else {
			this.removeProduct(product.idProducto);
		}
	}

	removeProduct(idProducto) {
		let arr = this.orderList;
		let attr = 'id';
		let value = idProducto;
		let i = arr.length;
		while (i--) {
			if (arr[i]
				&& arr[i].hasOwnProperty(attr)
				&& arr[i][attr] === value) {
				arr.splice(i, 1);
				this.press = this.orderList.length;
			}
		}
		console.dir(arr);
		return arr;
	}

	displayClient() {
		if (this.clientSelected !== undefined) {
			console.log(this.clientSelected);
		} else {
			this.showAlert();
		}
	}

	displayOrder() {
		console.dir(this.orderList);
		let modal = this.modalCtrl.create(
			OrderListPage,
			{
				clientSelected: this.clientSelected,
				orderList: this.orderList,
			});
		modal.present();

		this.clearOrder();
	}

	clearOrder() {
		this.orderList = [];
		this.press = this.orderList.length;
		// product.cantidad = 0;
		console.log(this.orderList);
	}

	incrementQuantity(product) {
		if (isNaN(product.cantidad)) {
			product.cantidad = 1;
		} else {
			product.cantidad++;
		}
		console.log(product.cantidad);
	}

	decrementQuantity(product) {
		if (isNaN(product.cantidad)) {
			product.cantidad = 0;
		} else {
			product.cantidad--;
		}
		console.log(product.cantidad);
	}

	showAlert() {
		let alert = this.alertCtrl.create({
			buttons: ['Aceptar'],
			subTitle: 'Debe seleccionar primero el cliente',
			title: 'Productos',
		});
		alert.present();
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
