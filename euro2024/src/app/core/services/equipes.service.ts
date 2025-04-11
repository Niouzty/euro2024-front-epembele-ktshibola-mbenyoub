import { Injectable } from '@angular/core';
import { Equipe, EquipeBD } from '../../models/equipe.model';
import { EquipeCompare } from '../../models/equipes-compare';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap, catchError, throwError } from 'rxjs';
import { AbstractServiceCRUD } from './AbstractServiceCRUD';

@Injectable({
  providedIn: 'root'
})
export class EquipesService extends AbstractServiceCRUD<EquipeBD> {

  constructor(private httsp: HttpClient){
    super(httsp)
  }
  protected override getUrl(): string {
    return "http://127.0.0.1:5000/equipes/";
  }

  compareTeams(id_equipe1: number, id_equipe2: number): Observable<EquipeCompare> {
    if (!id_equipe1 || !id_equipe2) {
      return throwError(() => new Error("Les IDs des deux équipes sont requis"));
    }

    return this.http.post<EquipeCompare>(
      `${this.getUrl()}compare`, 
      { equipe1_id: id_equipe1, equipe2_id: id_equipe2 }
    ).pipe(
      catchError(error => {
        console.error('Erreur lors de la comparaison:', error);
        return throwError(() => error);
      })
    );
  }

  getEquipesCompare(): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(`${this.getUrl()}compare`).pipe(
      catchError(error => {
        console.error('Erreur lors de la récupération des équipes:', error);
        return throwError(() => error);
      })
    );
  }

}