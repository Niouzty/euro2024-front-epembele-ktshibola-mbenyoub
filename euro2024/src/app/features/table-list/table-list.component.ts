import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipesService } from '../../core/services/equipes.service';
import { Equipe } from '../../models/equipe';

@Component({
  selector: 'app-table-list',
  standalone: true,
  imports: [CommonModule],
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

  private loadEquipes(): void {
    this.equipesService.getEquipes().subscribe({
      next: (data) => {
        this.equipes = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors du chargement des équipes';
        this.isLoading = false;
        console.error(err);
      }
    });
  }
}