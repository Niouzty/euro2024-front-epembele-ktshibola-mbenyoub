import { Component } from '@angular/core';
import { PageGestionData } from '../../PageGestionData';
import { Temps, TempsBD } from '../../../models/Temps';
import { DatabaseService } from '../../../core/services/database.service';
import { TempsService } from '../../../core/services/temps.service';
import { TableauDataComponent } from "../../../core/composants/tableau-data/tableau-data.component";
import { InsertComponent } from "../../../core/composants/insert/insert.component";

@Component({
  selector: 'app-temps-page',
  imports: [TableauDataComponent, InsertComponent],
  templateUrl: './temps-page.component.html',
  styleUrl: './temps-page.component.scss'
})
export class TempsPageComponent extends PageGestionData<TempsBD,Temps>{
   constructor(private serviceBD: DatabaseService, private serviceR: TempsService)
    {
      super("Temps",serviceR);
    }
    
    ngOnInit(): void {
      this.serviceBD.getTable("temps").subscribe({
        next: (table) => super.init(table)
      });
    }
    
  
    
      override get trie(): Record<string, number> {
        return {}
      
      }
  
      override get filtre(): Record<string, number> {
        return {}
      }
     
    
      override convertData(t: TempsBD): Temps {
        return {
          id: {
            value: t.id_temps,
            url: "temps/" + t.id_temps,
          },
          date_heure_match: t.date_heure_match,
        };
      }
}
