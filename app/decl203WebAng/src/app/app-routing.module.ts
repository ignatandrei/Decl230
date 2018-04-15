import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OngComponent } from './ong/ong.component';
import { DatepropriiComponent } from './dateproprii/dateproprii.component';
import { PdfgeneratorComponent } from './pdfgenerator/pdfgenerator.component';
import { DespreComponent } from './despre/despre.component';

const routes: Routes = [
  { path: '', redirectTo: '/ong', pathMatch: 'full' },
  { path: 'ong', component: OngComponent },
  { path: 'pers', component: DatepropriiComponent },  
  { path:'pdfgen', component: PdfgeneratorComponent},
  { path:'despre', component: DespreComponent},
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }