import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NavComponent} from "./nav.component";
import {MenuComponent} from "./menu/menu.component";


const routes:Routes=[
  {path:"nav",component:NavComponent,children:[
      {path:"menu",component:MenuComponent}]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class NavRoutingModule { }
