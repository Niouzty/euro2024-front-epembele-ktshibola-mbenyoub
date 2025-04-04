import { Component } from '@angular/core';
import { EquipesService } from '../../core/services/equipes.service';
import { Equipe } from '../../models/equipe.model';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-equipe-list',
  imports: [HttpClientModule],
  providers: [EquipesService],
  templateUrl: './equipe-list.component.html',
  styleUrl: './equipe-list.component.scss'
})

export class EquipeListComponent {
  equipes: Equipe[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private equipesService: EquipesService) {}

  ngOnInit(): void {
    this.loadEquipes();
  }

  loadEquipes(): void {
  this.equipesService.getEquipes().subscribe({
    next: (data) => {
      this.equipes = Array.isArray(data) ? data : [data];
      console.log(this.equipes);
    },
    error: (err) => this.errorMessage = 'Erreur lors du chargement des équipes'
  });
  }

  onDelete(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette équipe ?')) {
      this.equipesService.deleteEquipe(id).subscribe({
        next: () => {
          this.equipes = this.equipes.filter(e => e.id_equipe !== id);
          this.errorMessage = '';
        },
        error: (err) => this.errorMessage = err.message
      });
    }
  }
}
