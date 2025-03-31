import { Injectable } from '@angular/core';
import { Equipe } from '../../models/equipe';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipesService {
  private apiUrl = `${environment.apiUrl}/equipes`;

  constructor(private http: HttpClient) {} // Corrigé la faute de frappe "hhtp"

  // Création d'une équipe
  addEquipe(nom: string, groupe: string, entraineur: string): Observable<Equipe> {
    return this.http.post<Equipe>(this.apiUrl, { nom, groupe, entraineur });
  }

  // Suppression d'une équipe
  deleteEquipe(idEquipe: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${idEquipe}`);
  }

  // Récupération d'une équipe par ID
  getEquipe(idEquipe: number): Observable<Equipe> {
    return this.http.get<{ data: Equipe }>(`${this.apiUrl}/${idEquipe}`).pipe(
      map(response => response.data)
    );
  }

  // Récupération de toutes les équipes
  getEquipes(): Observable<Equipe[]> {
    return this.http.get<{ data: Equipe[] }>(this.apiUrl).pipe(
      map(response => response.data || [])
    );
  }
}