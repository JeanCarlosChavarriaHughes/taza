import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderPage } from './order';

@NgModule({
	declarations: [
		OrderPage,
	],
	exports: [
		OrderPage,
	],
	imports: [
		IonicPageModule.forChild(OrderPage),
	],
})
export class OrderPageModule { }
