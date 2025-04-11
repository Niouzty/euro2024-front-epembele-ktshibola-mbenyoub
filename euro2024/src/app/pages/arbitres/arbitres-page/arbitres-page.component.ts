import { Component } from '@angular/core';
import { InsertComponent } from "../../../core/composants/insert/insert.component";
import { TableauDataComponent } from "../../../core/composants/tableau-data/tableau-data.component";
import { PageGestionData } from '../../PageGestionData';
import { Arbitre, ArbitreBD } from '../../../models/arbitre.model';
import { ArbitreService } from '../../../core/services/arbitre.service';
import { DatabaseService } from '../../../core/services/database.service';

@Component({
  selector: 'app-arbitres-page',
  imports: [InsertComponent, TableauDataComponent],
  templateUrl: './arbitres-page.component.html',
  styleUrl: './arbitres-page.component.scss'
})
export class ArbitresPageComponent extends PageGestionData<ArbitreBD,Arbitre> {

  constructor(private serviceBD: DatabaseService, private serviceR: ArbitreService)
    {
      super("Arbitre",serviceR);
    }
    
    ngOnInit(): void {
      this.serviceBD.getTable("arbitre").subscribe({
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
     
    
      override convertData(arbitreBD: ArbitreBD): Arbitre {
        return {
          id: {
            value: arbitreBD.id_arbitre,
            url: "arbitres/" + arbitreBD.id_arbitre,
          },
          nom: arbitreBD.nom,
          prenom: arbitreBD.prenom,
          id_nationalite: arbitreBD.id_nationalite
        };
      }
      
  

}
