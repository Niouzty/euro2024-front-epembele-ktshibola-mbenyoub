import { Component } from '@angular/core';
import { Table } from '../../models/Table';
import { DatabaseService } from '../../core/services/database.service';
import { TableComponent } from "../../core/composants/table/table.component";
import { log } from 'console';

@Component({
  selector: 'app-home-page',
  imports: [TableComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  titre! : string;
  tables!: Table[];

  constructor(serviceDB : DatabaseService)
  {
    this.titre = 'EURO 2024 - Gestionnaire';

    serviceDB.getSchema().subscribe({
      next: (data) => {
        this.tables = data;
        console.log(this.tables);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération du schéma :', error);
      }
    });
    
    
  }
}
