import { Component } from '@angular/core';
import { Equipe } from '../../models/equipe';
import { EquipesService } from '../../core/services/equipes.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-comparaison-equipes',
  providers:[EquipesService],
  imports: [HttpClientModule],
  templateUrl: './comparaison-equipes.component.html',
  styleUrl: './comparaison-equipes.component.scss'
})
export class ComparaisonEquipesComponent {

}
