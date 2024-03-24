import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { MaterialModule } from '../material/material.module';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})

export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  enabled = new FormControl(false);

  submittingApplication:boolean = false;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);

    this.housingService.getHousingLocationById(housingLocationId).then((housing) => {
      this.housingLocation = housing;
    })
  }

  submitApplication(): void {
    this.submittingApplication = true;
    setTimeout(() => {
      let result = this.housingService.submitApplication(
        this.applyForm.value.firstName ?? '',
        this.applyForm.value.lastName ?? '',
        this.applyForm.value.email ?? ''
      );
      if (result) console.log("Recebido");
      this.submittingApplication = false;
    }, 1000);
  }
  

}