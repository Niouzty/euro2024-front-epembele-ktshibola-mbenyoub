import { Routes } from '@angular/router';
import {TableListComponent} from './features/table-list/table-list.component';
import { HomeComponent } from './features/home/home.component';
import {EquipeListComponent} from './features/equipe-list/equipe-list.component';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
    {path: '',component: HomeComponent},
    { path: 'table-list', component: TableListComponent },
    {path:'equipe_list', component: EquipeListComponent}
];
