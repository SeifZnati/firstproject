import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ResidenceService} from "../service/residence.service";
import {Residence} from "../../core/models/Residence";

@Component({
  selector: 'app-residence-detail',
  templateUrl: './residence-detail.component.html',
  styleUrls: ['./residence-detail.component.css']
})
export class ResidenceDetailComponent implements OnInit{
  id!: number;
  constructor(private act:ActivatedRoute, private residenceService: ResidenceService) {

}
res:Residence=new Residence;
ngOnInit() {
  this.id = this.act.snapshot.params['id'];
  this.residenceService.getResidenceById(this.id).subscribe((residence) => {
    this.res = residence;
  }
  );
}

}
