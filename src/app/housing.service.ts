import { Injectable, inject } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  
  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<HousingLocation[]> { // This function returns an array of interface 'HousingLocation'
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  constructor() { }

  submitApplication(firstName: string, lastName: string, email: string): boolean {
    console.log(`Cadastro recebido! Nome: ${firstName} ${lastName}. Email: ${email}`)
    return true;
  }
}
