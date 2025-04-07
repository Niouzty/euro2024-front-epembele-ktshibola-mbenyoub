import { Component, OnInit } from '@angular/core';
import { EquipesService } from '../../core/services/equipes.service';
import { Equipe } from '../../models/equipe.model';
import { TableauDataComponent } from '../../shared/components/tableau-data/tableau-data.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-equipe-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, TableauDataComponent],
  templateUrl: './equipe-list.component.html',
})
export class EquipeListComponent implements OnInit {
  equipes: Equipe[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private equipesService: EquipesService) {}

  ngOnInit(): void {
    this.loadEquipes();
  }

  loadEquipes(): void {
    this.isLoading = true;
    this.equipesService.getEquipes().subscribe({
      next: (data) => {
        this.equipes = Array.isArray(data) ? data : [data];
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors du chargement des équipes';
        this.isLoading = false;
      }
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

  onEdit(id: number): void {
    // Navigation gérée par le routerLink dans le template
    console.log('Édition de l\'équipe', id);
  }

  onValueChange(event: {column: string, id: number, newValue: any}): void {
    // Solution temporaire sans méthode updateEquipe
    // On recharge simplement les données depuis le serveur
    console.warn('Mise à jour non implémentée - rechargement des données');
    this.loadEquipes();
    
    // Alternative: Mise à jour locale uniquement (non persistée)
    // const index = this.equipes.findIndex(e => e.id_equipe === event.id);
    // if (index !== -1) {
    //   this.equipes[index] = { ...this.equipes[index], [event.column]: event.newValue };
    // }
  }
}