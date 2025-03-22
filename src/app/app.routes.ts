import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { StadesPageComponent } from './pages/stades-page/stades-page.component';

export const routes: Routes = [
    { path:'stades',component:StadesPageComponent },

    { path: '**', component: NotFoundPageComponent }
];
