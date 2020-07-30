import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule
    
  ],  
  exports: [
    HeaderComponent,
    FooterComponent
  ],
})
export class CoreModule { }
