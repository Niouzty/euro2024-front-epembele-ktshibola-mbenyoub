import { Component } from '@angular/core';
import { TableauDataComponent } from "../../../core/composants/tableau-data/tableau-data.component";
import { InsertComponent } from "../../../core/composants/insert/insert.component";
import { DatabaseService } from '../../../core/services/database.service';
import { PosteService } from '../../../core/services/poste.service';
import { PageGestionData } from '../../PageGestionData';
import { Poste, PosteBD } from '../../../models/Poste';

@Component({
  selector: 'app-postes-page',
  imports: [TableauDataComponent, InsertComponent],
  templateUrl: './postes-page.component.html',
  styleUrl: './postes-page.component.scss'
})
export class PostesPageComponent extends PageGestionData<PosteBD,Poste> {
  
   constructor(private serviceBD: DatabaseService, private serviceR: PosteService)
    {
      super("Postes",serviceR);
    }
    
    ngOnInit(): void {
      this.serviceBD.getTable("poste").subscribe({
        next: (table) => super.init(table)
      });
    }
    
  
    
      override get trie(): Record<string, number> {
        return {}
      
      }
  
      override get filtre(): Record<string, number> {
        return {}
      }
     
      override convertData(data: PosteBD): Poste {
        return {
          id:{
            value: data.id_poste,
            url: "/postes/"+data.id_poste,
          },
          nom: data.nom
        }
      }
    
      
}
