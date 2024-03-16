import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [],
  imports: [ CommonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatIconModule, MatButtonModule, MatToolbarModule, MatCardModule, MatDividerModule ],
  exports: [ MatFormFieldModule, MatInputModule, MatSidenavModule, MatIconModule, MatButtonModule, MatToolbarModule, MatCardModule, MatDividerModule ]
})
export class MaterialModule { }
