import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TAZA } from './app.component';
import { HttpModule } from '@angular/http';

// Componets
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Pages
import { TabsPage } from '../pages/tabs/tabs';
import { ClientPage } from './../pages/client/client';
import { ActiveClientsPage } from '../pages/active-clients/active-clients';
import { OrderPage } from './../pages/order/order';
import { ProductPage } from './../pages/product/product';

// Providers
import { ClientProvider } from '../providers/client/client';
import { ProductProvider } from '../providers/product/product';
import { OrderProvider } from '../providers/order/order';

@NgModule({
	bootstrap: [IonicApp],
	declarations: [
		TAZA,
		TabsPage,
		ClientPage,
		ActiveClientsPage,
		OrderPage,
		ProductPage,
	],

	entryComponents: [
		TAZA,
		TabsPage,
		ClientPage,
		ActiveClientsPage,
		OrderPage,
		ProductPage,
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
					tabsPlacement: 'top',
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
	],
})
export class AppModule { }
