import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardsComponent } from './pages/cards/cards.component';
import { ListProjectsComponent } from './pages/list-projects/list-projects.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CardsComponent,
    ListProjectsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class HomeModule { }
