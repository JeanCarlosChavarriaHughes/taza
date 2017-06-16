import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Pages
import { ClientPage } from '../client/client';

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
}
