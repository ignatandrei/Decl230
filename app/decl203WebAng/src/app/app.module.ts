import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppComponent } from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { OngComponent } from './ong/ong.component';
import { ONGService } from './ong/ong.service';
import { DatepropriiComponent } from './dateproprii/dateproprii.component';
import { PdfViewerModule, PdfViewerComponent } from 'ng2-pdf-viewer';
@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,  
    OngComponent, 
    DatepropriiComponent,
    
    
  ],
  imports: [
    NoopAnimationsModule,
    BrowserModule,
    ClarityModule,
    HttpClientModule,  
    FormsModule  ,
    PdfViewerModule
  ],
  providers: [
    MessageService,
    ONGService,
    { provide: 'LOCALSTORAGE', useFactory: getLocalStorage }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
//https://www.ryadel.com/en/angular-5-access-window-document-localstorage-browser-types-angular-universal/
export function getLocalStorage() {
  return (typeof window !== "undefined") ? window.localStorage : null;
}
