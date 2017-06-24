import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';

// Provider
import { ClientProvider } from './../../providers/client/client';

@IonicPage()
@Component({
	selector: 'page-client',
	templateUrl: 'client.html',
})
export class ClientPage implements OnInit {
	// tslint:disable-next-line:no-inferrable-types
	searching: boolean = false;
	searchControl: FormControl;
	public clients: any;
	private tabBarElement: any;
	private searchClient: string;

	constructor(public navCtrl: NavController, public navParams: NavParams, private clientProvider: ClientProvider) {
		this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
		this.searchControl = new FormControl();
	}

	ngOnInit() {
		this.getClients();
	}

	getClients() {
		// Metodo llamado desde ClientProvider
		this.clientProvider.getClients(this.searchClient).subscribe(
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
		this.navCtrl.parent.select(2);
		console.log('take me back pressed');
	}

	doRefresh(refresher) {
		console.log('Begin async operation', refresher);
		setTimeout(() => {
			this.getClients();
			console.log('refresh completed');
			refresher.complete();
		}, 1000);
	}
}
