import '../../src-js/main';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(upgrade: UpgradeModule) {
    upgrade.bootstrap(document.body, ['store']);
  }
}
