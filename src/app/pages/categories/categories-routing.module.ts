import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ApparelsComponent } from './apparels/apparels.component';
import { SneakersComponent } from './sneakers/sneakers.component';

const routes: Routes = [
  { path: '', component: SneakersComponent  },
  { path: 'accessories', component: AccessoriesComponent },
  { path: 'apparels', component: ApparelsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
