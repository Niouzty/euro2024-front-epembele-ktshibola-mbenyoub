import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { StadesService } from '../../Services/stades.service';
import { DatabaseService } from '../../Services/database.service';
import { Stade } from '../../Modeles/Stade';
import { Column } from '../../Modeles/Columns';
import { TableauDataComponent } from "../../core/composants/tableau-data/tableau-data.component";
import { TableComponent } from '../../core/composants/table/table.component';
import { DiagViewerComponent } from './diag-viewer/diag-viewer.component';
import { InsertComponent } from "../../core/composants/insert/insert.component";
import { Table } from '../../Modeles/Table';

@Component({
  selector: 'app-stades-page',
  standalone: true,
  imports: [
    CommonModule,
    TableauDataComponent,
    FormsModule,
    TableComponent,
    DiagViewerComponent,
    NgxChartsModule,
    InsertComponent
], 
  templateUrl: './stades-page.component.html', 
  styleUrl: './stades-page.component.scss', 
})

export class StadesPageComponent implements OnInit {
  titre: string = "Liste des Stades !";
  stades: Stade[] = [];
  taillePage: number = 10;
  nombreTotalStades: number = 0;
  
  table: Column[] = [];
  tables: Table = new Table(this.table);
  pageActuelle : number = -1;

  constructor(
    private stadeService: StadesService,
    private bdservice: DatabaseService
  ) {}


  get fonctionTries(): Record<string, (values: Stade[]) => Stade[]>[] {
    return [
      {
        "Capacité + > -": (values: Stade[]) => {
          return values.sort((a, b) => b.capacite - a.capacite);
        }
      },
      {
        "Capacité - > +": (values: Stade[]) => {
          return values.sort((a, b) => a.capacite - b.capacite);
        }
      }
    ];
  }

  get pageMax(): number {
    return Math.ceil(this.nombreTotalStades / this.taillePage);
  }


  ngOnInit(): void {
    this.chargementPage(1);
    
    this.stadeService.getNombreStades().subscribe({
      next: (nombre) => {
        this.nombreTotalStades = nombre;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération du nombre total de stades :', err);
      }
    });

    this.table = this.bdservice.table;
    this.tables = new Table(this.table);
  }

  chargementPage(page: number): void {

    this.pageActuelle = page;
    this.stadeService.getStades(page, this.taillePage).subscribe({
      next: (response) => {
        if (response.length > 0) {
          this.stades = response;
          console.log("donnée reçue");
        } else {
          console.log("donnée non reçue");

          this.stades = [];
        }
        
        console.log(this.stades);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des stades :', err);
      }
    });
  }

  onChangementDePage(page: number): void {
    this.chargementPage(page);
  }

 
  changeValue(data : {column: string, id: number | string , newValue: number | string})
  {
    this.stadeService.updateStade(data.column, data.id, data.newValue).subscribe({
      next: (res) => {
        if (res.status === 200) { 
          this.chargementPage(this.pageActuelle);
        }
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour:', err);
      }
    });
    
  }

  onStadeInsert(data: Record<string, any>[])  {
    return data.map(item => ({
      Id_stade: item['Id_stade'],
      nom: String(item['nom']),
      ville: Number(item['ville']),
      capacite: Number(item['capacite'])
    }));

  }
}