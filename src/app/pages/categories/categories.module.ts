import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ApparelsComponent } from './apparels/apparels.component';
import { SneakersComponent } from './sneakers/sneakers.component';


@NgModule({
  declarations: [AccessoriesComponent, ApparelsComponent, SneakersComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
