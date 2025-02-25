import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ResidencesComponent} from "./residences/residences.component";
import {FormResidenceComponent} from "./form-residence/form-residence.component";
import {ResidenceDetailComponent} from "./residence-detail/residence-detail.component";
import {UpdateResidenceComponent} from "./update-residence/update-residence.component";

const routes:Routes=[
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"residences",component:ResidencesComponent},
  {path:"addresidence",component:FormResidenceComponent},
  {path:"residences/residencedetails/:id",component:ResidenceDetailComponent},
  {path:"residences/residenceupdate/:id",component:UpdateResidenceComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
