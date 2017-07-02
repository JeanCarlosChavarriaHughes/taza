import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Pages
import { ClientPage } from '../client/client';
import { OrderPage } from './../order/order';

// Providers
import { ClientProvider } from '../../providers/client/client';

@IonicPage()
@Component({
	selector: 'page-active-clients',
	templateUrl: 'active-clients.html',
})
export class ActiveClientsPage implements OnInit {
	public clientAccounts: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, private clientProvider: ClientProvider) {
	}

	ngOnInit() {
		this.getClientAccounts();
	}

	getClientAccounts() {
		// Metodo llamado desde ClientProvider
		this.clientProvider.getClientAccounts().subscribe(
			data => {
				this.clientAccounts = data.json();
			},
			err => console.log(err),
			() => console.log('get client accounts completed'),
		);
	}

	goToOtherPage() {
		// push another page onto the history stack
		// causing the nav controller to animate the new page in
		this.navCtrl.push(ClientPage);
	}

	goToClient(client: any) {
		// console.log(client.nombreCliente + ' ' + client.apellidoCliente + ' selected');
		this.navCtrl.push(OrderPage, {
			clientSelected: client,
		});
	}

	doRefresh(refresher) {
		console.log('Begin async operation', refresher);
		setTimeout(() => {
			this.getClientAccounts();
			console.log('refresh completed');
			refresher.complete();
		}, 1000);
	}
}
