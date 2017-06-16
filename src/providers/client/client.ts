import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientProvider {

	constructor(public http: Http) {
		console.log('ClientProvider Provider');
	}
	getClients() {
		let clients = this.http.get(`http://imagineing.ddns.net:8181/api/client`);
		return clients;
	}

	getClientAccounts() {
		let clientAccounts = this.http.get(`http://imagineing.ddns.net:8181/api/client/account`);
		return clientAccounts;
	}
}
