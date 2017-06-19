import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Provider
import { ClientProvider } from './../../providers/client/client';

@IonicPage()
@Component({
	selector: 'page-client',
	templateUrl: 'client.html',
})
export class ClientPage implements OnInit {
	public clients: any;
	tabBarElement: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, private clientProvider: ClientProvider) {
		this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
	}

	ngOnInit() {
		this.getClients();
	}

	getClients() {
		// Metodo llamado desde ClientProvider
		this.clientProvider.getClients().subscribe(
			data => {
				this.clients = data.json();
			},
			err => console.log(err),
			() => console.log('get clients completed'),
		);
	}
	ionViewWillEnter() {
		this.tabBarElement.style.display = 'none';
	}

	ionViewWillLeave() {
		this.tabBarElement.style.display = 'flex';
	}

	takeMeBack() {
		this.navCtrl.parent.select(0);
	}
}
