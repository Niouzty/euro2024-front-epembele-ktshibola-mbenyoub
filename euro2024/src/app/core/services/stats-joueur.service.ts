import { Injectable } from '@angular/core';
import { JoueurWithStats } from '../../models/joueurwithstats.model';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsJoueurService {
  private apiUrl = `${environment.apiUrl}/stats_joueurs`

  constructor(private http: HttpClient) {}

    getJoueursTriesParStats(): Observable<JoueurWithStats[]> {
      return this.http.get<JoueurWithStats[]>(`${this.apiUrl}/top-buteurs`);
    }
  
    private hasValidStatsId(joueurwithstats: JoueurWithStats): boolean {
      return joueurwithstats.id_stats_joueur !== null && 
      joueurwithstats.id_stats_joueur !== undefined &&
             !isNaN(joueurwithstats.id_stats_joueur);
    }
  
    private compareStatsIds(a?: number, b?: number): number {
      const idA = a ?? Infinity; // Si undefined/null, met à la fin
      const idB = b ?? Infinity;
      return idA - idB;
    }
}
