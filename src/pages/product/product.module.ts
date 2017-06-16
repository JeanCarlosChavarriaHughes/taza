import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductPage } from './product';

@NgModule({
	declarations: [
		ProductPage,
	],
	exports: [
		ProductPage,
	],
	imports: [
		IonicPageModule.forChild(ProductPage),
	],
})
export class ProductPageModule { }
