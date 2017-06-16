import { Component } from '@angular/core';

// Pages
import { ActiveClientsPage } from '../active-clients/active-clients';
import { OrderPage } from './../order/order';
import { ProductPage } from './../product/product';
@Component({
	templateUrl: 'tabs.html',
})
export class TabsPage {
	ActiveClientsPage = ActiveClientsPage;
	OrderPage = OrderPage;
	ProductPage = ProductPage;
	constructor() {

	}
}
