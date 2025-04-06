import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InsertComponent } from '../../../core/composants/insert/insert.component';
import { TableComponent } from '../../../core/composants/table/table.component';
import { TableauDataComponent } from '../../../core/composants/tableau-data/tableau-data.component';
import { DatabaseService } from '../../../core/services/database.service';
import { StadesService } from '../../../core/services/stades.service';
import { Stade, StadeBD } from '../../../models/Stade';
import { Table } from '../../../models/Table';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-stades-page',
  standalone: true,
  imports: [
    CommonModule,
    TableauDataComponent,
    FormsModule,
    InsertComponent,
  
], 
  templateUrl: './stades-page.component.html', 
  styleUrl: './stades-page.component.scss', 
})

export class StadesPageComponent implements OnInit {
  titre: string = "Liste des Stades !";
  stades: Stade[] = [];
  taillePage: number = 10;
  nombreTotalStades: number = 0;
  schema! : Table;
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
    const dataMap : StadeBD[] = data.map(item => ({
      id_stade: item['id_stade'],
      nom: String(item['nom']),
      id_ville: Number(item['id_ville']),
      capacite: Number(item['capacite'])
    }));

    this.stadeService.insertStades(dataMap).subscribe({
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
}