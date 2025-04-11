import { Component } from '@angular/core';
import { TableauDataComponent } from "../../../core/composants/tableau-data/tableau-data.component";
import { InsertComponent } from "../../../core/composants/insert/insert.component";
import { PageGestionData } from '../../PageGestionData';
import { Nationalite, NationaliteBD } from '../../../models/nationalite.model';
import { VilleService } from '../../../core/services/ville.service';
import { DatabaseService } from '../../../core/services/database.service';
import { NationaliteService } from '../../../core/services/nationalite.service';

@Component({
  selector: 'app-nationalite-page',
  imports: [TableauDataComponent, InsertComponent],
  templateUrl: './nationalite-page.component.html',
  styleUrl: './nationalite-page.component.scss'
})

export class NationalitePageComponent extends PageGestionData<NationaliteBD,Nationalite>{
   constructor(private serviceBD: DatabaseService, private serviceN: NationaliteService)
    {
      super("Nationalites",serviceN);
    }
    
    ngOnInit(): void {
      this.serviceBD.getTable("nationalite").subscribe({
        next: (table) => super.init(table)
      });
    }
    
  
    
      override get trie(): Record<string, number> {
        return {}
      }
  
      override get filtre(): Record<string, number> {
        return  {}
      }
     
    
      override convertData(nat: NationaliteBD): Nationalite {
        return {
          id: {
            value: nat.id_nationalite,
            url: "nationalites/" + nat.id_nationalite,
          },
          nom: nat.nom,
        };
      }
      
}
