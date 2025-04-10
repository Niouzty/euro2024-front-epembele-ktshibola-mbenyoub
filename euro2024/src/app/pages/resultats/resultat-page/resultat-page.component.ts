import { Component } from '@angular/core';
import { PageGestionData } from '../../PageGestionData';
import { Resultat, ResultatBD } from '../../../models/Resultat';
import { ResultatService } from '../../../core/services/resultat.service';
import { DatabaseService } from '../../../core/services/database.service';
import { InsertComponent } from "../../../core/composants/insert/insert.component";
import { TableauDataComponent } from "../../../core/composants/tableau-data/tableau-data.component";

@Component({
  selector: 'app-resultat-page',
  imports: [InsertComponent, TableauDataComponent],
  templateUrl: './resultat-page.component.html',
  styleUrl: './resultat-page.component.scss'
})

export class ResultatPageComponent extends PageGestionData<ResultatBD,Resultat> {
   constructor(private serviceBD: DatabaseService, private serviceR: ResultatService)
    {
      super("Resultats",serviceR);
    }
    
    ngOnInit(): void {
      this.serviceBD.getTable("resultat").subscribe({
        next: (table) => super.init(table)
      });
    }
    
  
    
      override get trie(): Record<string, number> {
        return {}
      
      }
  
      override get filtre(): Record<string, number> {
        return {}
      }
     
      convertData(res: ResultatBD): Resultat {
        return {
          id: {
            value: res.id_resultat,  
            url: "resultats/" + res.id_resultat, 
          },
          buts_equipe1_temps_reglementaire: res.buts_equipe1_temps_reglementaire,
          buts_equipe2_temps_reglementaire: res.buts_equipe2_temps_reglementaire,
          prolongation: res.prolongation,
          tirs_au_but: res.tirs_au_but,
          buts_equipe1_apres_prolongation: res.buts_equipe1_apres_prolongation,
          buts_equipe2_apres_prolongation: res.buts_equipe2_apres_prolongation,
          score_equipe1: res.score_equipe1,
          score_equipe2: res.score_equipe2,
        };
      }
      
}
