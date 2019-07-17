// Onsen UI Styling and Icons
require('onsenui/css/onsen-css-components.css');
require('onsenui/css/onsenui.css');

import * as ons from 'onsenui';

// Application code starts here
import { enableProdMode, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClientModule } from '@angular/common/http';
import { OnsenModule } from 'ngx-onsenui';

import { MyApp } from './app/app';
import { MainPage } from './app/main.page';
import { OffersComponent } from './app/offers.component';

import { PriceService } from './services/price.service';

// Enable production mode when in production mode.
if (process.env.NODE_ENV === 'production') {
    enableProdMode();
}

if (ons.platform.isIPhoneX()) {
    document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
    document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
}

@NgModule({
    imports: [
        OnsenModule, // has BrowserModule internally
        HttpClientModule,
    ],
    declarations: [
        MyApp,
        MainPage,
        OffersComponent,
    ],
    entryComponents: [MainPage],
    providers: [PriceService],
    bootstrap: [MyApp],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
class AppModule { }

if (module['hot']) module['hot'].accept();

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
