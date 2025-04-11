import { Component } from '@angular/core';
import { TableauDataComponent } from "../../../core/composants/tableau-data/tableau-data.component";
import { InsertComponent } from "../../../core/composants/insert/insert.component";
import { PageGestionData } from '../../PageGestionData';
import { Ville, VilleBD } from '../../../models/villes.model';
import { DatabaseService } from '../../../core/services/database.service';
import { VilleService } from '../../../core/services/ville.service';

@Component({
  selector: 'app-villes-page',
  imports: [TableauDataComponent, InsertComponent],
  templateUrl: './villes-page.component.html',
  styleUrl: './villes-page.component.scss'
})
export class VillesPageComponent extends PageGestionData<VilleBD,Ville>{
  
  constructor(private serviceBD: DatabaseService, private serviceR: VilleService)
  {
    super("Villes",serviceR);
  }
  
  ngOnInit(): void {
    this.serviceBD.getTable("ville").subscribe({
      next: (table) => super.init(table)
    });
  }
  

  
    override get trie(): Record<string, number> {
      return {}
    
    }

    override get filtre(): Record<string, number> {
      return {}
    }
   
  
    override convertData(ville: VilleBD): Ville {
      return {
        id: {
          value: ville.id_ville,
          url: "villes/" + ville.id_ville,
        },
        nom: ville.nom,
      };
    }
    
}
