import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/dashboard/dashboard.component';

//components


const routes: Routes = [
  //{path:'', redirectTo:'dashboard',pathMatch:'full'},
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  
  {path:'**', redirectTo:'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
