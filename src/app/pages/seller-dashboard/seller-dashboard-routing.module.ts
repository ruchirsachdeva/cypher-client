import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveComponent } from './active/active.component';
import { HistoryComponent } from './history/history.component';


const routes: Routes = [
  { path: '', component: ActiveComponent },
  { path: 'history', component: HistoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerDashboardRoutingModule { }
