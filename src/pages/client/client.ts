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

	constructor(public navCtrl: NavController, public navParams: NavParams, private clientProvider: ClientProvider) {
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
}
