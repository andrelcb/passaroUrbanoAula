import { Routes } from '@angular/router';

//componentes
import { HomeComponent } from './home/home.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'restaurantes', component: RestaurantesComponent},
    { path: 'diversao' ,component: DiversaoComponent}
]