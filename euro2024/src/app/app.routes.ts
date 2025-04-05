import { Routes } from '@angular/router';
import {TableListComponent} from './features/table-list/table-list.component';
import { HomeComponent } from './features/home/home.component';
import {EquipeListComponent} from './features/equipe-list/equipe-list.component';
import { TopButeursComponent } from './features/top-buteurs/top-buteurs.component'; 
import { ComparaisonEquipesComponent } from './features/comparaison-equipes/comparaison-equipes.component';
import { ArbitrePerformanceComponent } from './features/arbitre-performance/arbitre-performance.component';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
    {path: '',component: HomeComponent},
    { path: 'table-list', component: TableListComponent },
    {path:'equipe-list', component: EquipeListComponent},
    {path:'top-buteurs', component: TopButeursComponent},
    {path:'comparaison-equipes', component: ComparaisonEquipesComponent}, 
    {path:'arbitre-performances', component: ArbitrePerformanceComponent}
];
