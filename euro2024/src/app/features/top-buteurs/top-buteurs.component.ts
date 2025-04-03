import { Component } from '@angular/core';
import { JoueurWithStats } from '../../models/joueurwithstats.model';
import { StatsJoueurService } from '../../core/services/stats-joueur.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-top-buteurs',
  imports: [HttpClientModule ],
  providers: [StatsJoueurService],
  templateUrl: './top-buteurs.component.html',
  styleUrl: './top-buteurs.component.scss'
})
export class TopButeursComponent {
  joueurswithstats: JoueurWithStats[] = []; // Initialisation du tableau vide

  constructor(private statsjoueurservice: StatsJoueurService) {}

  ngOnInit(): void {
    this.loadJoueurs();
  }

  loadJoueurs(): void {
    this.statsjoueurservice.getJoueursTriesParStats().subscribe({
      next: (data) => {
        this.joueurswithstats = data; // Remplissage du tableau
      },
      error: (err) => {
        console.error('Erreur:', err);
        this.joueurswithstats = []; // Réinitialisation si erreur
      }
    });
  }

  voirStats(idStats?: number): void {
    if (idStats) {
      console.log('Voir stats pour ID:', idStats);
    }
  }
  
  rafraichir(): void {
    this.loadJoueurs(); // Recharge les données
  }
}
