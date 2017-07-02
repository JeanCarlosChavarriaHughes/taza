import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-order-list',
	templateUrl: 'order-list.html',
})
export class OrderListPage {
	tabBarElement: any;
	public orderList: any;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
		this.orderList = navParams.get('orderList');
	}

	ionViewDidLoad() {
	}

	ionViewWillEnter() {
		this.tabBarElement.style.display = 'none';
	}

	ionViewWillLeave() {
		this.tabBarElement.style.display = 'flex';
	}

	displayList() {
		console.dir(this.orderList);
	}

}
