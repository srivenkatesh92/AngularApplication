import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {MenubarModule} from 'primeng/menubar'

import { LayoutMainComponent } from './layout-main/layout-main.component';

import {MenubarComponent} from '../menubar/menubar.component';


@NgModule({
  declarations: [LayoutMainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    MenubarModule
  ],
  exports:[
    RouterModule,
    LayoutMainComponent
  ]
})
export class LayoutModule { }
