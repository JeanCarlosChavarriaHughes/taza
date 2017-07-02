import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Provider
import { OrderProvider } from './../../providers/order/order';

@IonicPage()
@Component({
	selector: 'page-order',
	templateUrl: 'order.html',
})
export class OrderPage implements OnInit {
	clientSelected: any;
	public orders: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, private orderProvider: OrderProvider) {
		this.clientSelected = navParams.get('clientSelected');
	}

	ngOnInit() {
		this.getOrders();
	}

	getOrders() {
		this.orderProvider.getOrders().subscribe(
			data => {
				this.orders = data.json();
			},
			err => console.log(err),
			() => console.log('get orders completed'),
		);
	}

	getClientSelected() {
		console.log(this.clientSelected);
	}

	doRefresh(refresher) {
		console.log('Begin async operation', refresher);
		setTimeout(() => {
			this.getOrders();
			console.log('refresh completed');
			refresher.complete();
		}, 1000);
	}
}
