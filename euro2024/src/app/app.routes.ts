import { Routes } from '@angular/router';
import {TableListComponent} from './features/table-list/table-list.component'
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
    {path: '',component: HomeComponent},
    { path: 'table-list', component: TableListComponent },
];
