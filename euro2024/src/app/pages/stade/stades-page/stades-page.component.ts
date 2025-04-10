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
import { PageGestionData } from '../../PageGestionData';

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

export class StadesPageComponent extends PageGestionData<StadeBD,Stade> implements OnInit {
  
  constructor(private serviceBD: DatabaseService, private stadeService: StadesService)
  {
    super("Stades",stadeService);
  }

  ngOnInit(): void {
    this.serviceBD.getTable("stade").subscribe({
      next: (table) => super.init(table)
    });

  }

 

 
  


  override get trie(): Record<string, number> {
    throw new Error('Method not implemented.');
  }
  override get filtre(): Record<string, number> {
    throw new Error('Method not implemented.');
  }
 


  override convertData(stades: StadeBD): Stade {
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

  
}
