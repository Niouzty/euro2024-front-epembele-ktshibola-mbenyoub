import { Routes } from '@angular/router';
import {TableListComponent} from './features/table-list/table-list.component';
import { HomeComponent } from './features/home/home.component';
import {EquipeListComponent} from './features/equipe-list/equipe-list.component';
import { TopButeursComponent } from './features/top-buteurs/top-buteurs.component'; 

import { StadesPageComponent } from './pages/stade/stades-page/stades-page.component';

export const routes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'stades',component: StadesPageComponent},
    {path: 'table-list', component: TableListComponent },
    {path:'equipe-list', component: EquipeListComponent},
    {path:'top-buteurs', component: TopButeursComponent}
];
