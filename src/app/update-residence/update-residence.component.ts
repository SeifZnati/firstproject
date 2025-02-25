import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ResidenceService } from "../service/residence.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Residence } from "../../core/models/Residence";

@Component({
  selector: 'app-update-residence',
  templateUrl: './update-residence.component.html',
  styleUrls: ['./update-residence.component.css']
})
export class UpdateResidenceComponent implements OnInit {
  formR: FormGroup; // Define formR as a FormGroup

  idupdate!: number;
  res: Residence = new Residence();

  constructor(
    private act: ActivatedRoute,
    private resService: ResidenceService,
    private router: Router
  ) {
    // Initialize formR as a FormGroup with its controls
    this.formR = new FormGroup({
      id: new FormControl(''), // Initialize each control with a default value if needed
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.maxLength(10)]),
      image: new FormControl(''),
      status: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.idupdate = this.act.snapshot.params['id'];
    this.resService.getResidenceById(this.idupdate).subscribe((residence) => {
      this.res = residence;
      this.populateForm(); // Call a function to populate the form after getting data
    });
  }

  // Function to populate the form with retrieved residence data
  private populateForm() {
    this.formR.patchValue({
      id: this.res.id,
      name: this.res.name,
      address: this.res.address,
      image: this.res.image,
      status: this.res.status
    });
  }

  // Getter for status control to simplify template access
  getStatus() {
    return this.formR.get('status');
  }

  // Method to handle form submission and update residence
  update() {
    if (this.formR.valid) {
      this.resService.updateResidence(this.idupdate, this.formR.value).subscribe(() => {
        this.router.navigate(['/residences']);
      });
    }
  }
}
