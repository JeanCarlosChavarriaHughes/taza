import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActiveClientsPage } from './active-clients';

@NgModule({
	declarations: [
		ActiveClientsPage,
	],
	exports: [
		ActiveClientsPage,
	],
	imports: [
		IonicPageModule.forChild(ActiveClientsPage),
	],
})
export class ActiveClientsPageModule { }
