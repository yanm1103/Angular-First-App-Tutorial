import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../material/material.module';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [MaterialModule, RouterLink, RouterOutlet],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
