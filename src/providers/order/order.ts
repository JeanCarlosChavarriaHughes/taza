import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import 'rxjs/Rx';
// import 'rxjs/add/observable/throw';

@Injectable()
export class OrderProvider {
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
	getAllOrders() {
		let orders = this.http.get(this.server.concat('/api/orders/pending'));
		return orders;
	}

	getOrders(idCuenta) {
		console.log(idCuenta);
		let orders = this.http.get(this.server.concat('/api/client/orders?idCuenta=') + idCuenta);
		return orders;
	}

	// req.body.formaPago, req.body.descuentoAplicado, req.body.servicioAplicado, req.body.id
	payOder(param: any): Observable<any> {
		let body = JSON.stringify(param);
		// let body = {
		// id: $scope.obj[i].idOrden,
		// formaPago: val,
		// descuentoAplicado: $scope.porcentajeDescuento,
		// servicioAplicado: servicio
		// };
		return this.http
			.put(this.server.concat('/api/order/pay'), body, this.options)
			.map(res => res.json)
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	}

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json() || 'Server error');
	}
}
