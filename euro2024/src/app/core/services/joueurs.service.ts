import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { map } from 'rxjs';
import { Joueur, JoueurBD } from '../../models/joueur.model';

@Injectable({
  providedIn: 'root'
})

export class JoueursService {

  private apiUrl = `${environment.apiUrl}/joueurs`

  constructor(private http: HttpClient) {}

  getLen() : Observable<number> {
    return this.http.get<{result: number}>(this.apiUrl+'/len').pipe(
      map(rep => rep.result)
    );
  }

  getJoueurs(page: number, taillePage: number): Observable<Joueur[]> {
    return this.http.get<{ result: any[] }>(`${this.apiUrl}?offset=${page}&limit=${taillePage}`).pipe(
      map(response => {
        if (!response?.result) return [];
        
        
        return response.result.map(joueur => ({
          id: {
            value: joueur.id_match,
            url: `/joueurs/${joueur.id_match}`
          }, 
          nom: joueur.nom,
          prenom: joueur.prenom,
          date_naissance: joueur.date_naissance,
          id_nationalite: joueur.id_nationalite,
          id_poste: joueur.id_poste,
          num_maillot: joueur.num_maillot,
          id_equipe: joueur.id_equipe
        }));
      }),
      catchError(error => {
        console.error('Erreur:', error);
        return of([]);
      })
     );
  }


  updateJoueur(column: string, id_joueur: number | string, newValue: number | string) : Observable<any> {
    const body = { 
      column: column,    
      value: newValue   
    }   

    return this.http.patch<any>(`${this.apiUrl}${id_joueur}`, body);
  }

  insertJoueur(data: JoueurBD[]): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/batch`, data);
  }

}
