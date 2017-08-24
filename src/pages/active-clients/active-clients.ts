import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ModalController } from 'ionic-angular';

// Pages
import { ClientFormPage } from './../forms/client-form/client-form';
import { ClientPage } from './../client/client';

// Providers
import { ClientProvider } from '../../providers/client/client';

@IonicPage()
@Component({
	selector: 'page-active-clients',
	templateUrl: 'active-clients.html',
})
export class ActiveClientsPage implements OnInit {

	public clientAccounts: any;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private clientProvider: ClientProvider,
		private events: Events,
		private modalCtrl: ModalController) {
	}

	ngOnInit() {
		this.getClientAccounts();
	}

	getClientAccounts() {
		// Metodo llamado desde ClientProvider
		this.clientProvider.getClientAccounts().subscribe(
			data => {
				this.clientAccounts = data;
			},
			err => console.log(err),
			() => console.log('get client accounts completed'),
		);
	}

	openClientForm() {
		let modal = this.modalCtrl.create(ClientFormPage);
		modal.present();
	}
	goToClient(client: any) {
		console.dir(client);
		this.events.publish('tab-client', 1, client);
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
