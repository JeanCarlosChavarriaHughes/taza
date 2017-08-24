import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, AlertController } from 'ionic-angular';

// Provider
import { OrderProvider } from './../../providers/order/order';

@IonicPage()
@Component({
	selector: 'page-order',
	templateUrl: 'order.html',
})
export class OrderPage implements OnInit {
	clientSelected: any;
	public orders: any;
	// account: number;

	constructor(
		public navCtrl: NavController,
		public alertCtrl: AlertController,
		public navParams: NavParams,
		private orderProvider: OrderProvider,
		events: Events) {
		events.subscribe('tab-client', (tab, client) => {
			this.clientSelected = client;
			console.log(this.clientSelected);
			this.getOrders();
		});
		events.subscribe('unselectClient', (clientState) => {
			this.clientSelected = clientState;
		});
	}

	ngOnInit() {
		this.getAllOrders();
	}

	getAllOrders() {
		this.orderProvider.getAllOrders().subscribe(
			data => {
				this.orders = data.json();
			},
			err => console.log(err),
			() => console.log('get all orders completed'),
		);
	}

	getOrders() {
		// if (this.clientSelected !== undefined) {
			let account = this.clientSelected.idCuenta;
			// console.log(account);
			this.orderProvider.getOrders(account).subscribe(
				data => {
					this.orders = data.json();
				},
				err => console.log(err),
				() => console.log('get orders completed'),
			);
		// } else {
		// 	this.showAlert();
		// }
	}

	showAlert() {
		let alert = this.alertCtrl.create({
			buttons: ['Aceptar'],
			subTitle: 'Debe seleccionar primero el cliente',
			title: 'Ordenes',
		});
		alert.present();
	}

	displayClient() {
		if (this.clientSelected !== undefined) {
			this.getOrders();
			console.log(this.clientSelected);
		} else {
			this.showAlert();
		}
	}
	// $scope.orders_reload = function (idCuenta, nombreCliente, apellidoCliente, totalPagar) {

	// 	var data = {
	// 		idCuenta: idCuenta
	// 	};
	// 	$scope.my_idCuenta = idCuenta;
	// 	$scope.my_nombreCliente = nombreCliente.concat(" ");
	// 	$scope.my_nombreCliente = $scope.my_nombreCliente.concat(apellidoCliente);
	// 	serviceRestaurant.setidCuenta($scope.my_idCuenta);
	// 	var orders = getOrdersPerAccount($scope, $http, $log, "/orders_per_cuenta_load", data);
	// 	$scope.pendienteTotal = totalPagar;
	// 	$scope.selectedRow = null;
	// 	$scope.selectedRow = idCuenta;
	// };

	doRefresh(refresher) {
		console.log('Begin async operation', refresher);
		setTimeout(() => {
			if (this.clientSelected === undefined) {
				this.getAllOrders();
			} else {
				this.getOrders();
			}
			console.log('refresh completed');
			refresher.complete();
		}, 1000);
	}
}
