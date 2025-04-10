import { Observable } from "rxjs";

export interface IService<T> {

    insert(item: T[]): Observable<T>;
    update(column: string, id: number, newValue: string | number): Observable<T>;
    delete(id: number): Observable<boolean>;

    getAll(page: number, size: number,trie: number, filtres: number[]): Observable<T[]>;
    getById(id: number): Observable<T>;
    countRow(): Observable<number>
    
    
    
  }