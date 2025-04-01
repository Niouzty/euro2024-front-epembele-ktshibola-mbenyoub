import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipesService } from '../../core/services/equipes.service';
import { Equipe } from '../../models/equipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-table-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})

export class TableListComponent implements OnInit {
  equipes: Equipe[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private equipesService: EquipesService) {}

  ngOnInit(): void {
    this.loadEquipes();
  }

  loadEquipes(): void {
    this.equipesService.getEquipes().subscribe({
      next: (data) => this.equipes = data,
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