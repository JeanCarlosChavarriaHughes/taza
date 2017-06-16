import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductProvider {

	constructor(public http: Http) {
	}

	getProducts() {
		let products = this.http.get(`http://imagineing.ddns.net:8181/api/restaurant`);
		return products;
	}

}
