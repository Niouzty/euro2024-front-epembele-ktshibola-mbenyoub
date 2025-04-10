import { Component } from '@angular/core';
import { DatabaseService } from '../../../core/services/database.service';
import { DrapeauService } from '../../../core/services/drapeau.service';
import { PageGestionData } from '../../PageGestionData';
import { Drapeau, DrapeauBD } from '../../../models/Drapeaux';
import { TableauDataComponent } from "../../../core/composants/tableau-data/tableau-data.component";
import { InsertComponent } from "../../../core/composants/insert/insert.component";

@Component({
  selector: 'app-drapeaux-page',
  imports: [TableauDataComponent, InsertComponent],
  templateUrl: './drapeaux-page.component.html',
  styleUrl: './drapeaux-page.component.scss'
})
export class DrapeauxPageComponent extends PageGestionData<DrapeauBD,Drapeau> {
  
  constructor(private serviceBD: DatabaseService, private serviceR: DrapeauService)
    {
      super("Drapeaux",serviceR);
    }
    
    ngOnInit(): void {
      this.serviceBD.getTable("drapeau").subscribe({
        next: (table) => super.init(table)
      });
    }
    
  
    
      override get trie(): Record<string, number> {
        return {}
      
      }
  
      override get filtre(): Record<string, number> {
        return {}
      }
     
      override convertData(data: DrapeauBD): Drapeau {

        return {
          id : {
            value: data.id_drapeau,
            url: "/drapeaux/"+data.id_drapeau
          },
          id_equipe: data.id_equipe,
          chemin_image: data.chemin_image
        }
      }
      
      
}
