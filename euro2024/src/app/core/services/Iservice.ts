import { Observable } from "rxjs";

export interface IService<T> {

    insert(item: T[]): Observable<{ success: boolean; result?: string; error?: string }>;
    update(column: string, id: number, newValue: string | number): Observable<{ success: boolean; result?: string; error?: string }>;
    delete(id: number): Observable< {success: boolean; result?: boolean; error?: string }>;

    getAll(page: number, size: number,trie: number, filtres: number[]): Observable<T[]>;
    getById(id: number): Observable<T>;
    countRow(): Observable<number>
    
    
    
  }