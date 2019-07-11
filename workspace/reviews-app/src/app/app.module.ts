import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReviewOverviewModule} from './review-overview/review-overview.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReviewOverviewModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
