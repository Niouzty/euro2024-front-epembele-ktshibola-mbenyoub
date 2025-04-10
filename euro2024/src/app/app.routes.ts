import { Routes } from '@angular/router';
import {TableListComponent} from './features/table-list/table-list.component';
import { HomeComponent } from './features/home/home.component';
import { ArbitrePerformanceComponent } from './features/arbitre-performance/arbitre-performance.component';
import { ComparaisonEquipesComponent } from './features/comparaison-equipes/comparaison-equipes.component';
import { TopButeursComponent } from './features/top-buteurs/top-buteurs.component'; 
import { StadesPageComponent } from './pages/stade/stades-page/stades-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { JoueurPageComponent } from './pages/joueur/joueur-page/joueur-page.component';
import { RencontresPageComponent } from './pages/rencontres/rencontres-page/rencontres-page.component';
import { ArbitresPageComponent } from './pages/arbitres/arbitres-page/arbitres-page.component';
import { VillesPageComponent } from './pages/villes/villes-page/villes-page.component';
import { NationalitePageComponent } from './pages/nationalite/nationalite-page/nationalite-page.component';
import { ResultatPageComponent } from './pages/resultats/resultat-page/resultat-page.component';
import { TempsPageComponent } from './pages/temps/temps-page/temps-page.component';
import { PostesPageComponent } from './pages/postes/postes-page/postes-page.component';
import { DrapeauxPageComponent } from './pages/drapeaux/drapeaux-page/drapeaux-page.component';

export const routes: Routes = [
    {path: '',component: HomePageComponent},
    {path: 'stades',component: StadesPageComponent},
    {path: 'joueurs', component: JoueurPageComponent },
    {path:"resultats",component:ResultatPageComponent},
    {path:"temps",component:TempsPageComponent},
    {path:"postes",component:PostesPageComponent},
    {path:"drapeaux",component: DrapeauxPageComponent},
    {path: 'rencontres', component: RencontresPageComponent},
    {path: 'arbitres', component: ArbitresPageComponent},
    {path: 'villes',component: VillesPageComponent},
    {path: 'nationalites',component: NationalitePageComponent},
    {path:'top-buteurs', component: TopButeursComponent},
    {path:'comparaison-equipes', component: ComparaisonEquipesComponent},
    {path:'arbitre-performances', component: ArbitrePerformanceComponent},
    {path:'**',component: NotFoundPageComponent}
];
