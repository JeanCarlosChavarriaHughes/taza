import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { BrowserModule } from '@angular/platform-browser';
// import { ErrorHandler, NgModule } from '@angular/core';
// import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
// import { HttpModule } from '@angular/http';

// Pages
import { TabsPage } from '../pages/tabs/tabs';
import { ClientPage } from './../pages/client/client';
import { ActiveClientsPage } from '../pages/active-clients/active-clients';
import { ProductPage } from './../pages/product/product';
import { OrderPage } from './../pages/order/order';
export interface PageInterface {
	title: string;
	name: string;
	component: any;
	icon: string;
	index?: number;
	tabName?: string;
	tabComponent?: any;
}

@Component({
	templateUrl: 'app.template.html',
})
export class TAZA {
	// the root nav is a child of the root app component
	// @ViewChild(Nav) gets a reference to the app's root nav
	@ViewChild(Nav) nav: Nav;
	// List of pages that can be navigated to from the left menu
	// the left menu only works after login
	// the login page disables the left menu
	appPages: PageInterface[] = [
		{ component: ClientPage,  icon: 'contact', name: 'ClientPage', title: 'Clientes' },
		{ component: TabsPage, icon: 'people', index: 0, name: 'TabsPage', tabComponent: ActiveClientsPage, title: 'Clientes activos' },
		{ component: TabsPage, icon: 'list', index: 1, name: 'TabsPage', tabComponent: OrderPage, title: 'Ordenes' },
		{ component: TabsPage, icon: 'cart', index: 2, name: 'TabsPage', tabComponent: ProductPage, title: 'Productos' },
	];
	rootPage: any;

	constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menu: MenuController) {
		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			statusBar.styleDefault();
			splashScreen.hide();
		});
		this.rootPage = TabsPage;
	}

	openPage(page: PageInterface) {
		let params = {};

		// the nav component was found using @ViewChild(Nav)
		// setRoot on the nav to remove previous pages and only have this page
		// we wouldn't want the back button to show in this scenario
		if (page.index) {
			params = { tabIndex: page.index };
		}

		// If we are already on tabs just change the selected tab
		// don't setRoot again, this maintains the history stack of the
		// tabs even if changing them from the menu
		if (this.nav.getActiveChildNav() && page.index !== undefined) {
			this.nav.getActiveChildNav().select(page.index);
			// Set the root of the nav with params if it's a tab index
		} else {
			this.nav.setRoot(page.name, params).catch((err: any) => {
				console.log(`Didn't set nav root: ${err}`);
			});
		}
		console.log(page.index);
	}

	isActive(page: PageInterface) {
		let childNav = this.nav.getActiveChildNav();

		// Tabs are a special case because they have their own navigation
		if (childNav) {
			if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
				return 'primary';
			}
			return;
		}

		if (this.nav.getActive() && this.nav.getActive().name === page.name) {
			return 'primary';
		}
		return;
	}
}
