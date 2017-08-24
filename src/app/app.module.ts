import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TAZA } from './app.component';
import { HttpModule } from '@angular/http';

// Componets
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Pages
import { ActiveClientsPage } from '../pages/active-clients/active-clients';
import { ClientPage } from './../pages/client/client';
import { ClientFormPage } from './../pages/forms/client-form/client-form';
import { OrderListPage } from './../pages/order-list/order-list';
import { OrderPage } from './../pages/order/order';
import { ProductPage } from './../pages/product/product';
import { TabsPage } from '../pages/tabs/tabs';

// Providers
import { ClientProvider } from '../providers/client/client';
import { ProductProvider } from '../providers/product/product';
import { OrderProvider } from '../providers/order/order';
import { BillProvider } from '../providers/bill/bill';

@NgModule({
	bootstrap: [IonicApp],
	declarations: [
		TAZA,
		ActiveClientsPage,
		ClientFormPage,
		ClientPage,
		OrderListPage,
		OrderPage,
		ProductPage,
		TabsPage,
	],

	entryComponents: [
		TAZA,
		ActiveClientsPage,
		ClientFormPage,
		ClientPage,
		OrderListPage,
		OrderPage,
		ProductPage,
		TabsPage,
	],

	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(TAZA, {
			platforms: {
				android: {
					tabsPlacement: 'top',
				},
				ios: {
					tabsPlacement: 'bottom',
				},
				windows:
				{
					tabsPlacement: 'top',
				},
			},
			tabsPlacement: 'top',
		}),
	],

	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		ClientProvider,
		ProductProvider,
		OrderProvider,
		BillProvider,
	],
})
export class AppModule { }
