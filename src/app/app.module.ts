import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormArrayPipe, FormControlPipe, FormGroupPipe} from "./form.pipe";

@NgModule({
    declarations: [
        AppComponent,
        FormControlPipe,
        FormGroupPipe,
        FormArrayPipe
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
