import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';
import { IService } from "./Iservice";

export abstract class AbstractServiceCRUD<T> implements IService<T>{

    constructor(protected readonly http: HttpClient) {}

    protected abstract getUrl(): string;

    insert(item: T[]): Observable<{ success: boolean; result?: string; error?: string }> {
        return this.http.post<any>(`${this.getUrl()}batch`, item).pipe(
            map(response => {
                if (response.result) 
                    return { success: true, result: response.result };
                 else (response.error) 
                    return { success: false, error: response.error };
            }),
            catchError(error => {
                console.error('Erreur lors de l\'insertion :', error);
                return of({
                    success: false,
                    error: 'Erreur de communication avec le serveur.'
                });  
            })
        );
    }
    

    update(column: string, id: number, newValue: string | number): Observable<{ success: boolean; result?: string; error?: string }> {
        const body = { 
            column: column,    
            value: newValue   
        };
    
        return this.http.patch<any>(`${this.getUrl()}${id}`, body).pipe(
            map(response => {
                if (response.result) 
                    return { success: true, result: response.result };
                 else (response.error) 
                    return { success: false, error: response.error };
            }),
            catchError(error => {
                console.error('Erreur lors de la mise à jour :', error);
                return of({
                    success: false,
                    error: 'Erreur de communication avec le serveur.'
                });  
            })
        );
    }
    
    

    delete(id: number): Observable<{ success: boolean; result?: boolean; error?: string }> {
        return this.http.delete<{ result: boolean, error?: string }>(this.getUrl() + id).pipe(
            map(res => {
                if (res.result) 
                    return { success: true, result: res.result };
                 else (res.error) 
                    return { success: false, error: res.error };
                
            }),
            catchError(error => {
                console.error('Erreur lors de la suppression :', error);
                return of({
                    success: false,
                    error: 'Erreur de communication avec le serveur.'
                });  // Renvoie un message d'erreur en cas d'échec
            })
        );
    }
    

    getAll(page: number, size: number, trie: number, filtres: number[]): Observable<T[]> {
        return this.http.get<{ result: T[] }>(`${this.getUrl()}?offset=${page}&limit=${size}`).pipe(
            map(res => res.result),
            catchError(error => {
                console.error('Erreur lors de la récupération des éléments :', error);
                return of([]);  // Retourner un tableau vide en cas d'erreur
            })
        );
    }

    getById(id: number): Observable<T> {
        return this.http.get<{ result: T }>(this.getUrl() + id).pipe(
            map(response => response.result)
        );
    }

    countRow(): Observable<number> {
        return this.http.get<{ result: number }>(this.getUrl() + "nombres").pipe(
            map(response => response.result),
            catchError(error => {
                console.error('Erreur lors du comptage des lignes :', error);
                return of(0);  // Retourner 0 en cas d'erreur
            })
        );
    }
}
