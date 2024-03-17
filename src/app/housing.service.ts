import { Injectable, inject } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Novo Começo - Casa',
      city: 'São Paulo',
      state: 'SP',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      availableUnits: 4,
      wifi: true,
      laundry: true,
      price: 1000,
      review: 3
    },
    {
      id: 1,
      name: 'Casa tranquila',
      city: 'Campo Grande',
      state: 'MS',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
      availableUnits: 0,
      wifi: false,
      laundry: true,
      price: 1400,
      review: 2
    },
    {
      id: 2,
      name: 'Lar doce lar',
      city: 'Goiania',
      state: 'GO',
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
      availableUnits: 1,
      wifi: false,
      laundry: false,
      price: 1200,
      review: 3
    },
    {
      id: 3,
      name: 'Casa no centro de SP',
      city: 'São Paulo',
      state: 'SP',
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
      price: 1800,
      review: 4
    },
    {
      id: 4,
      name: 'Casa torta',
      city: 'Carbonita',
      state: 'MG',
      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
      availableUnits: 1,
      wifi: true,
      laundry: false,
      price: 1700,
      review: 3
    },
    {
      id: 5,
      name: 'Apartamentos no Esperança',
      city: 'Mauá',
      state: 'SP',
      photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
      price: 700,
      review: 4
    },
    {
      id: 6,
      name: 'Cidade sériamente segura',
      city: 'Barra da tijuca',
      state: 'RJ',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      availableUnits: 5,
      wifi: true,
      laundry: true,
      price: 2500,
      review: 3
    },
    {
      id: 7,
      name: 'Casa, Casa, Casa...',
      city: 'Ribeirão Preto',
      state: 'SP',
      photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
      availableUnits: 2,
      wifi: true,
      laundry: true,
      price: 3000,
      review: 5
    }
  ];
  getAllHousingLocations(): HousingLocation[] { // This function returns an array of interface 'HousingLocation'
    return this.housingLocationList;
  }
  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(house => house.id === id);
  }
  constructor() { }

  submitApplication(firstName: string, lastName: string, email: string) :boolean {
    console.log(`Cadastro recebido! Nome: ${firstName} ${lastName}. Email: ${email}`)
    return true;
  }
}
