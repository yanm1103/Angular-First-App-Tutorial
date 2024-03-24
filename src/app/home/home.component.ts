import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

// Components
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';

// Services
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HousingLocationComponent,
    CommonModule,
    MaterialModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  housingLocationList: HousingLocation[] = [];

  housingService: HousingService = inject(HousingService);

  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((list:HousingLocation[]) => {
      this.housingLocationList = list;
      this.filteredLocationList = list;
    })
  }

  // When searching for a city.
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    } else {
      this.filteredLocationList = this.housingLocationList.filter(
        housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
      )
      return;
    }
  }

  // Prevents page reload if enter is pressed inside the filter input
  handleEnter(event: KeyboardEvent, text: string) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.filterResults(text);
    }
  }

}