import { Injectable } from '@angular/core';
import { Joueur } from '../../models/joueur';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class JoueursService {

  private apiUrl = `${environment.apiUrl}/joueurs`

  constructor(private http: HttpClient) {}

  addJoueur(id_joueur: number, nom: string, prenom: string,date_naissance: string, id_nationalite: number, id_poste: number, num_maillot: number, id_equipe: number, id_stats_joueur?: number): Observable<Joueur>{
    return this.http.post<Joueur>(this.apiUrl, {id_joueur, nom, prenom, date_naissance, id_nationalite, id_poste, num_maillot, id_equipe, id_stats_joueur })
  }
}
