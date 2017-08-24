import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormControl } from '@angular/forms';

@IonicPage()
@Component({
	selector: 'page-client-form',
	templateUrl: 'client-form.html',
})
export class ClientFormPage {
	searchControl: FormControl;
	private tabBarElement: any;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
	 public viewCtrl: ViewController) {
		this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
		this.searchControl = new FormControl();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ClientFormPage');
	}

	ionViewWillEnter() {
		this.tabBarElement.style.display = 'none';
	}

	ionViewWillLeave() {
		this.tabBarElement.style.display = 'flex';
	}

	dismiss() {
		this.viewCtrl.dismiss();
	}
}
