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
    this.equipesService.getEquipes().subscribe({
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
    if (!this.equipe1 || !this.equipe2) {
      this.errorMessage = 'Veuillez sélectionner deux équipes';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.equipesService.compareTeams(this.equipe1.id_equipe, this.equipe2.id_equipe).subscribe({
      next: (data) => {
        
        this.resultats = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors de la comparaison';
        this.isLoading = false;
      }
    });
  }
}