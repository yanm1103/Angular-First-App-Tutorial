import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
