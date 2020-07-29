import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components


const routes: Routes = [
  //{path:'', redirectTo:'dashboard',pathMatch:'full'},
  
  {path:'**', redirectTo:'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
