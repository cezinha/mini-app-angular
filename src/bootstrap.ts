import "./polyfills";
import { environment } from "./environments/environment";
import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window["ngRef"]) {
      window["ngRef"].destroy();
    }
    window["ngRef"] = ref;

    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));

// import { enableProdMode } from '@angular/core';
// import { platformBrowser } from '@angular/platform-browser';
// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (!(window as any).shell && environment.production) {
//   enableProdMode();
// }

// // platformBrowser().bootstrapModule(AppModule)
// //   .catch(err => console.error(err));

// declare const require: any;
// const ngVersion = require('../package.json').dependencies['@angular/core'];
// (window as any).plattform = (window as any).plattform || {};
// let platform = (window as any).plattform[ngVersion];
// if (!platform) {
//   platform = platformBrowser();
//   (window as any).plattform[ngVersion] = platform;
// }
// platform.bootstrapModule(AppModule)
//   .catch(err => console.error(err));
