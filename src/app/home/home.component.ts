import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { NormsComponent } from '../norms/norms.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HousingLocationComponent,
    NormsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  counter: number = 0;
  penis(printSomethingElse: number) {
    this.counter++;
    console.log("test: " + this.counter);
    console.log(printSomethingElse);
  }

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  houses: HousingLocation[] = [];

  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };

  ngOnInit(): void {
    console.log(this.housingLocation);
    this.houses.push(this.housingLocation);
    console.log(this.houses)
  }
}
