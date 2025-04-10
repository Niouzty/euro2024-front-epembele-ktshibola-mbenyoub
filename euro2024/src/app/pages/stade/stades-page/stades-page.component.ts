import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InsertComponent } from '../../../core/composants/insert/insert.component';
import { TableauDataComponent } from '../../../core/composants/tableau-data/tableau-data.component';
import { DatabaseService } from '../../../core/services/database.service';
import { StadesService } from '../../../core/services/stades.service';
import { Stade, StadeBD } from '../../../models/Stade';
import { Table } from '../../../models/Table';
import { map } from 'rxjs';

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
  styleUrls: ['./stades-page.component.scss'], 
})

export class StadesPageComponent implements OnInit {
  titre: string = "Liste des Stades !";
  stades: Stade[] = [];
  taillePage: number = 10;
  nombreTotalStades: number = 0;
  schema!: Table;
  pageActuelle: number = -1;

  constructor(
    private stadeService: StadesService,
    private service: DatabaseService
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
    
    
    this.stadeService.countRow().subscribe({
      next: (nombre) => {
        this.nombreTotalStades = nombre;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération du nombre total de stades :', err);
      } 
    });

    this.chargementPage(1);
    
    this.service.getTable('stade').subscribe({
        next: (data) => this.schema = data
    });
    
  }

  chargementPage(page: number): void {
    this.pageActuelle = page;
    this.stadeService.getAll(page, this.taillePage).subscribe({
      next: (response) => {
        if (response.length > 0) {
          this.stades = response.map(this.convertData); 
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

  changeValue(data: { column: string; id: number | string; newValue: number | string }) {
    this.stadeService.update(data.column, +data.id, data.newValue).subscribe({
      next: (res) => {
        if (res) {
          const index = this.stades.findIndex(s => s.id.value == data.id);
          if (index === -1)
             return;

          const oldStade = this.stades[index];
          const newStade = { ...oldStade, [data.column]: data.newValue };

          this.stades.splice(index, 1, newStade);
        }
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour :', err);
      }
    });
  }

  onStadeInsert(data: Record<string, any>[]) {
    const dataMap: StadeBD[] = data.map(item => ({
      id_stade: item['id_stade'],
      nom: String(item['nom']),
      id_ville: Number(item['id_ville']),
      capacite: Number(item['capacite'])
    }));

    this.stadeService.insert(dataMap).subscribe({
      next: (res) => {
        if (res) { 
          this.stades.push(this.convertData(res));
        }
      },
      error: (err) => {
        console.error('Erreur lors de l\'insertion :', err);
      }
    });
  }

  convertData(stades: StadeBD): Stade {
    return {
      id: {
        value: stades.id_stade,
        url: "stades/" + stades.id_stade,
      },
      nom: stades.nom,
      id_ville: stades.id_ville,
      capacite: stades.capacite
    };
  }

  deleteRow(id_stade: number | string): void {
    this.stadeService.delete(+id_stade).subscribe({
      next: (success) => {
        if (success) {
          alert('Suppression réussie !');
        } else {
          alert('Erreur lors de la suppression');
        }
      },
      error: (error) => {
        alert('Une erreur est survenue lors de la communication avec le serveur' + error);
      }
    });
  }
}
