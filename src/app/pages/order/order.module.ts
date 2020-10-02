import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NbLayoutModule ,
    NbCardModule,
    NbButtonModule,
    NbSelectModule,
    NbToggleModule,
    NbMenuModule,
    NbActionsModule,
    NbSidebarModule,
    NbInputModule
      } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './order.component';


@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NbLayoutModule,
    NbCardModule,
    NbInputModule,
    NbActionsModule,
    NbButtonModule,
    NbSelectModule,
    NbToggleModule,
    NbMenuModule,
    NbSidebarModule,
    HttpClientModule
  ],
})
export class OrderModule { }