import { Routes } from '@angular/router';
import {TableListComponent} from './features/table-list/table-list.component';
import { HomeComponent } from './features/home/home.component';
import {EquipeListComponent} from './features/equipe-list/equipe-list.component';
import { TopButeursComponent } from './features/top-buteurs/top-buteurs.component'; 

import { StadesPageComponent } from './pages/stade/stades-page/stades-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { JoueurPageComponent } from './pages/joueur/joueur-page/joueur-page.component';
import { RencontresPageComponent } from './pages/rencontres/rencontres-page/rencontres-page.component';

export const routes: Routes = [
    {path: '',component: HomePageComponent},
    {path: 'stades',component: StadesPageComponent},
    {path: 'joueurs', component: JoueurPageComponent },
    {path: 'rencontres', component: RencontresPageComponent},
    {path:'equipe-list', component: EquipeListComponent},
    {path:'top-buteurs', component: TopButeursComponent},
    {path:'**',component: NotFoundPageComponent}
];
