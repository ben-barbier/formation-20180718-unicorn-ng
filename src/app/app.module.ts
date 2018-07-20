import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UnicornsListComponent} from './pages/unicorns-list/unicorns-list.component';
import {HttpClientModule} from '@angular/common/http';
import {UnicornCardComponent} from './pages/unicorns-list/unicorn-card/unicorn-card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule, MatFormFieldModule,
    MatIconModule, MatInputModule,
    MatSnackBarModule,
    MatToolbarModule
} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { UnicornComponent } from './pages/unicorn/unicorn.component';
import { MagicalNamePipe } from './shared/pipes/magical-name.pipe';
import {EditUnicornDialogComponent} from './pages/unicorns-list/unicorn-card/edit-unicorn/edit-unicorn.dialog.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        UnicornsListComponent,
        UnicornCardComponent,
        HeaderComponent,
        HomeComponent,
        UnicornComponent,
        MagicalNamePipe,
        EditUnicornDialogComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatBadgeModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [EditUnicornDialogComponent],
})
export class AppModule {
    private static EditUnicornComponent: any;
}
