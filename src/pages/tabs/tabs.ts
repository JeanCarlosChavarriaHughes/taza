import { Component, ViewChild } from '@angular/core';
import { Events, Tabs } from 'ionic-angular';

// Pages
import { ActiveClientsPage } from '../active-clients/active-clients';
import { OrderPage } from './../order/order';
import { ProductPage } from './../product/product';
@Component({
	templateUrl: 'tabs.html',
})
// reference component in page template
export class TabsPage {
	@ViewChild(Tabs) tabs: Tabs;
	ActiveClientsPage = ActiveClientsPage;
	OrderPage = OrderPage;
	ProductPage = ProductPage;
	private fullName = 'TAZA';
	private total: any = undefined;
	private clientState;
	constructor(private events: Events) {
		events.subscribe('tab-client', (tab, client) => {
			this.tabs.select(tab);
			this.fullName = client.nombreCliente + ' ' + client.apellidoCliente;
			this.total = client.TotalPagar;
		});
	}

	unselectClient() {
		this.events.publish('unselectClient', this.clientState = undefined);
		this.fullName = 'TAZA';
		this.total = undefined;
	}
}
