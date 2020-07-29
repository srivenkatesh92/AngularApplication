import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { Router } from '@angular/router';

const routes : Routes = [
{path:'',component:DashboardComponent}
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
