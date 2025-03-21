import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabaseService } from './Services/database.service';
import { TableComponent } from "./core/composants/table/table.component";
import { HeaderComponent } from "./layouts/header/header.component";
import {StadesPageComponent } from "./pages/stades-page/stades-page.component";
import { HttpClient } from '@angular/common/http';
import { TableauDataComponent } from "./core/composants/tableau-data/tableau-data.component";


@Component({
  selector: 'app-root',
  imports: [TableauDataComponent, StadesPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ViewSAE';


}
