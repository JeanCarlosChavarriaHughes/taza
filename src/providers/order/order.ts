import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderProvider {

	constructor(public http: Http) {
	}
	getOrders() {
		let orders = this.http.get(`http://imagineing.ddns.net:8181/api/orders/pending`);
		return orders;
	}
}
