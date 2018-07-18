import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UnicornsListComponent} from './unicorns-list/unicorns-list.component';
import {HttpClientModule} from '@angular/common/http';
import {UnicornCardComponent} from './unicorns-list/unicorn-card/unicorn-card.component';

@NgModule({
    declarations: [
        AppComponent,
        UnicornsListComponent,
        UnicornCardComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
