import { Component } from '@angular/core';
import { Equipe } from '../../models/equipe.model';
import { EquipeCompare } from '../../models/equipes-compare';
import { EquipesService } from '../../core/services/equipes.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comparaison-equipes',
  providers: [EquipesService],
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './comparaison-equipes.component.html',
  styleUrl: './comparaison-equipes.component.scss'
})
export class ComparaisonEquipesComponent {
  constructor(private equipesService: EquipesService) {}
  
  equipes: Equipe[] = [];
  equipe1: Equipe | null = null;
  equipe2: Equipe | null = null;
  selectedEquipe: number | null = null;
  errorMessage = '';
  isLoading = false;
  resultats: EquipeCompare | null = null;

  get availableEquipes1(): Equipe[] {
    return this.equipes.filter(e => this.equipe2 ? e.id_equipe !== this.equipe2.id_equipe : true);
  }
  
  get availableEquipes2(): Equipe[] {
    return this.equipes.filter(e => this.equipe1 ? e.id_equipe !== this.equipe1.id_equipe : true);
  }

  ngOnInit(): void {
    this.loadEquipes();
  }

  loadEquipes(): void {
    this.equipesService.getEquipesCompare().subscribe({
      next: (data) => {
        this.equipes = Array.isArray(data) ? data : [data];
      },
      error: (err) => this.errorMessage = 'Erreur lors du chargement des équipes'
    });
  }

  selectEquipe(equipeNum: number): void {
    this.selectedEquipe = this.selectedEquipe === equipeNum ? null : equipeNum;
  }

  onEquipeSelected(equipeNum: number): void {
    this.selectedEquipe = null; 
  }

  isEquipeDisabled(equipe: Equipe, equipeNum: number): boolean {
    if (equipeNum === 1) {
      return !!this.equipe2 && this.equipe2.id_equipe === equipe.id_equipe;
    } else {
      return !!this.equipe1 && this.equipe1.id_equipe === equipe.id_equipe;
    }
  }

  compareTeams(): void {
    console.log('Équipe 1:', this.equipe1);
    console.log('Équipe 2:', this.equipe2);

    if (!this.equipe1?.id_equipe || !this.equipe2?.id_equipe) {
        this.errorMessage = 'Veuillez sélectionner deux équipes valides';
        console.error('IDs manquants:', {
            equipe1: this.equipe1?.id_equipe,
            equipe2: this.equipe2?.id_equipe
        });
        return;
    }

    if (this.equipe1.id_equipe === this.equipe2.id_equipe) {
        this.errorMessage = 'Veuillez sélectionner deux équipes différentes';
        return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.equipesService.compareTeams(this.equipe1.id_equipe, this.equipe2.id_equipe).subscribe({
        next: (data) => {
            console.log('Réponse réussie:', data);
            this.resultats = data;
            this.isLoading = false;
        },
        error: (err) => {
            console.error('Erreur complète:', err);
            this.errorMessage = `Erreur technique: ${err.message || 'Veuillez réessayer'}`;
            this.isLoading = false;
            
            // Pour débogage - à retirer en production
            if (err.error) {
                console.error('Détails erreur:', err.error);
            }
        }
    });
}
}