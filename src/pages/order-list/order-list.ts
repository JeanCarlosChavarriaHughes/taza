import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'client-order-list',
	templateUrl: 'order-list.html',
})
export class OrderListPage {
	private orderList: object;
	private client: number;

	constructor(
		public alertCtrl: AlertController,
		public navParams: NavParams,
		public viewCtrl: ViewController) {
		this.orderList = navParams.get('orderList');
		this.client = navParams.get('clientSelected');
	}

	ionViewDidLoad() {
	}

	displayList() {
		console.dir(this.orderList);
		if (this.client === undefined) {
			this.showAlert();
		} else {
			console.dir(this.client);
		}
	}

	showAlert() {
		let alert = this.alertCtrl.create({
			buttons: ['Aceptar'],
			subTitle: 'No ha seleccionado ningun cliente',
			title: 'Ordenes',
		});
		alert.present();
	}

	dismiss() {
		this.viewCtrl.dismiss();
	}
}
