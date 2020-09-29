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
    NbSidebarModule
      } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NbLayoutModule,
    NbCardModule,
    NbActionsModule,
    NbButtonModule,
    NbSelectModule,
    NbToggleModule,
    NbMenuModule,
    NbSidebarModule,
    HttpClientModule
  ],
})
export class LoginModule { }