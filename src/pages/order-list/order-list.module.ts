import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderListPage } from './order-list';

@NgModule({
	declarations: [
		OrderListPage,
	],
	exports: [
		OrderListPage,
	],
	imports: [
		IonicPageModule.forChild(OrderListPage),
	],
})
export class OrderListPageModule { }
