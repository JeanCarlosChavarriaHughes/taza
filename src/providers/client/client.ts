import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class ClientProvider {
	headers: Headers;
	options: RequestOptions;
	server: string = 'http://imagineing.ddns.net:8181';

	constructor(public http: Http) {
		this.headers = new Headers({
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		});
		this.options = new RequestOptions({ headers: this.headers });
	}
	getClients(searchClient) {
		let clients = this.http.get(this.server.concat('/api/client/client'));
		return clients;
	}

	getClientAccounts(): Observable<any> {
		return this.http.get(this.server.concat('/api/client/account'), this.options)
			.map((res: Response) => res.json())
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}
}
