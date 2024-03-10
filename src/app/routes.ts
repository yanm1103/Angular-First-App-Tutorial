import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Homes - Página inicial'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Homes - Detalhes da casa'
    }
  ];
  
  export default routeConfig;