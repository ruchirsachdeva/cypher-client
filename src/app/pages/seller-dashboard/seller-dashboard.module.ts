import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SellerDashboardRoutingModule } from './seller-dashboard-routing.module';
import { ActiveComponent } from './active/active.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SellerDashboardRoutingModule
  ],
  declarations: [ActiveComponent, HistoryComponent]
})
export class SellerDashboardModule { }
