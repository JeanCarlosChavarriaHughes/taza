import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class BillProvider {
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

	// 
	printBill(param): Observable<any> {
		let body = JSON.stringify(param);
		return this.http
			.post(this.server.concat('/imprimirFactura'), body, this.options)
			.map(res => res.json)
			.catch(this.handleError);
	}
	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json() || 'Server error');
	}
}
