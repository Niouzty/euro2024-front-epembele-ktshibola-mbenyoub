import { Component } from '@angular/core';
import { Joueur, JoueurBD } from '../../../models/joueur';
import { Table } from '../../../models/Table';
import { DatabaseService } from '../../../core/services/database.service';
import { JoueursService } from '../../../core/services/joueurs.service';
import { TableauDataComponent } from "../../../core/composants/tableau-data/tableau-data.component";
import { InsertComponent } from "../../../core/composants/insert/insert.component";

@Component({
  selector: 'app-joueur-page',
  imports: [TableauDataComponent, InsertComponent],
  templateUrl: './joueur-page.component.html',
  styleUrl: './joueur-page.component.scss'
})
export class JoueurPageComponent {
  titre: string = "Liste des joueurs !";
  joueurs: Joueur[] = [];
  taillePage: number = 10;
  nombreTotalStades: number = 0;
  schema! : Table;
  pageActuelle : number = -1;
  
  constructor(
    private joueurService: JoueursService,
    private bdservice: DatabaseService
  ) {}
  
  
  get pageMax(): number {
    return Math.ceil(this.nombreTotalStades / this.taillePage);
  }
  
  
  ngOnInit(): void {
    this.chargementPage(1);
      
    this.joueurService.getLen().subscribe({
      next: (nombre) => {
        this.nombreTotalStades = nombre;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération du nombre total de stades :', err);
      }
    });
  
    this.bdservice.getTable('joueurs').subscribe({
      next: (data) => {
        this.schema = data;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération du schéma :', error);
      },
      complete: () => {
        console.log('Récupération du schéma terminée.');
      }
    });
  
  }
  
  chargementPage(page: number): void {
    this.pageActuelle = page;

    this.joueurService.getJoueurs(page, this.taillePage).subscribe({
      next: (response) => {
        if (response.length > 0) {
          this.joueurs = response;
          console.log("donnée reçue");
        } else {
          console.log("donnée non reçue");
          this.joueurs = [];
        }
          
      },
        error: (err) => {
          console.error('Erreur lors de la récupération des stades :', err);
        }
    });

  }
  
  onChangementDePage(page: number): void {
    this.chargementPage(page);
  }
  
   
  changeValue(data : {column: string, id: number | string , newValue: number | string})
  {
    this.joueurService.updateJoueur(data.column, data.id, data.newValue).subscribe({
      next: (res) => {
        if (res.status === 200) { 
          this.chargementPage(this.pageActuelle);
        }
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour:', err);
      }
    });
      
  }
  
  onStadeInsert(data: Record<string, any>[])  {
    const dataMap: JoueurBD[] = data.map(item => ({
      nom: item['nom'],
      prenom: item['prenom'],
      date_naissance: item['date_naissance'],
      id_nationalite: Number(item['id_nationalite']),
      id_poste: Number(item['id_poste']),
      num_maillot: Number(item['num_maillot']),
      id_equipe: Number(item['id_equipe']),
      id_stats_joueur: item['id_stats_joueur'] ? Number(item['id_stats_joueur']) : undefined,
      id_match: Number(item['id_match'])
    }));
  
    this.joueurService.insertJoueur(dataMap).subscribe({
      next: (res) => {
        if (res.status === 200) { 
          this.chargementPage(this.pageActuelle);
        }
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour:', err);
      }
    });
  }
}
