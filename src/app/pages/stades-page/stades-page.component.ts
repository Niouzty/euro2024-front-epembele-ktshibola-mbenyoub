import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StadesService } from '../../Services/stades.service';
import { Stade } from '../../Modeles/Stade';
import { TableauDataComponent } from "../../core/composants/tableau-data/tableau-data.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stades-page',
  imports: [CommonModule, TableauDataComponent,FormsModule], 
  templateUrl: './stades-page.component.html', 
  styleUrl: './stades-page.component.scss', 
})
export class StadesPageComponent implements OnInit {

  titre: string = "Liste des Stades !";
  stades: Stade[] = [];
  taillePage: number = 10;
  nombreTotalStades: number = 0;
  constructor(private stadeService: StadesService) {}


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


  chargementPage(page: number)
  {
    this.stadeService.getStades(page,this.taillePage).subscribe({
      next: (response) => {
        this.stades = response.result;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des stades :', err);
      }
    });
  }

  onChangementDePage(page: number){
    this.chargementPage(page);
  }

  pageMax(): number {
    return Math.ceil(this.nombreTotalStades / this.taillePage);
  }




}