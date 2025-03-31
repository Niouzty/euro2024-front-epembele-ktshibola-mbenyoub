import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private apiUrl = `${environment.apiUrl}/database`;

  constructor(private http: HttpClient) { }

  testDatabaseConnection() {
    return this.http.get<{message: string, result: any}>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Erreur de connexion:', error);
        return of({
          message: 'Erreur de connexion au serveur',
          result: null
        });
      })
    );
  }
}