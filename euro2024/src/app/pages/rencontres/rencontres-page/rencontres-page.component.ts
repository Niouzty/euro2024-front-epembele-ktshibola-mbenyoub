import { Component } from '@angular/core';
import { PageGestionData } from '../../PageGestionData';
import { Rencontre, RencontreBD } from '../../../models/Rencontre';
import { DatabaseService } from '../../../core/services/database.service';
import { RencontreService } from '../../../core/services/rencontre.service';
import { TableauDataComponent } from '../../../core/composants/tableau-data/tableau-data.component';
import { InsertComponent } from "../../../core/composants/insert/insert.component";

@Component({
  selector: 'app-rencontres-page',
  imports: [TableauDataComponent, InsertComponent],
  templateUrl: './rencontres-page.component.html',
  styleUrl: './rencontres-page.component.scss'
})
export class RencontresPageComponent extends PageGestionData<RencontreBD,Rencontre> 
{

  constructor(private serviceBD: DatabaseService, private serviceR: RencontreService)
  {
    super("Stades",serviceR);
  }
  
  ngOnInit(): void {
    this.serviceBD.getTable("rencontre").subscribe({
      next: (table) => super.init(table)
    });
  }
  

  
    override get trie(): Record<string, number> {
      return {
        "Capcaité descroisant" : 1,
        "Capacité croisant" : 2
      }
    }
    override get filtre(): Record<string, number> {
      return {
        "Capcaité descroisant" : 1,
        "Capacité croisant" : 2
      }
    }
   
  
    override convertData(rencontre: RencontreBD): Rencontre {
      return {
        id: {
          value: rencontre.id_match,
          url: "rencontres/" + rencontre.id_match,
        },
        id_temps: rencontre.id_temps,
        id_stade: rencontre.id_stade,
        id_equipe1: rencontre.id_equipe1,
        id_equipe2: rencontre.id_equipe2,
        id_phase: rencontre.id_phase,
        id_resultat: rencontre.id_resultat,
        ...(rencontre.nb_spectateurs !== undefined && { nb_spectateurs: rencontre.nb_spectateurs })
      };
    }


  

}
