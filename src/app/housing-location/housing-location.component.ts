import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, RouterLink, RouterOutlet, MatDividerModule, MatIcon],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
