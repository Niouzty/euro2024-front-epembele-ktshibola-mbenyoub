import { Component } from '@angular/core';
import { Table } from '../../../models/Table';
import { DatabaseService } from '../../../core/services/database.service';
import { JoueursService } from '../../../core/services/joueurs.service';
import { TableauDataComponent } from "../../../core/composants/tableau-data/tableau-data.component";
import { InsertComponent } from "../../../core/composants/insert/insert.component";
import { Joueur, JoueurBD } from '../../../models/joueur.model';
import { PageGestionData } from '../../PageGestionData';
import { Rencontre, RencontreBD } from '../../../models/Rencontre';
import { StadesService } from '../../../core/services/stades.service';
import { RencontreService } from '../../../core/services/rencontre.service';

@Component({
  selector: 'app-joueur-page',
  imports: [TableauDataComponent, InsertComponent],
  templateUrl: './joueur-page.component.html',
  styleUrl: './joueur-page.component.scss'
})
export class JoueurPageComponent extends PageGestionData<JoueurBD,Joueur>
{
  constructor(private serviceBD: DatabaseService, private serviceJ: JoueursService)
    {
      super("Stades",serviceJ);
    }
  
    ngOnInit(): void {
      this.serviceBD.getTable("joueur").subscribe({
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
   
  
    override convertData(joueur: JoueurBD): Joueur {
      return {
        id: {
          value: joueur.id_joueur,
          url: "joueurs/" + joueur.id_joueur,
        },
        nom: joueur.nom,
        prenom: joueur.prenom,
        date_naissance: joueur.date_naissance,
        id_nationalite: joueur.id_nationalite,
        id_poste: joueur.id_poste,
        num_maillot: joueur.num_maillot,
        id_equipe: joueur.id_equipe,
        ...(joueur.id_stats_joueur !== undefined && { id_stats_joueur: joueur.id_stats_joueur })
      };
    }
    
}
