import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavRoutingModule} from "./nav-routing.module";
import {NavComponent} from "./nav.component";
import {MenuComponent} from "./menu/menu.component";



@NgModule({
  declarations: [
    NavComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    NavRoutingModule
  ]
})
export class NavModule { }
