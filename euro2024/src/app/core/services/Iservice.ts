import { Observable } from "rxjs";

export interface IService<T> {

    insert(item: T[]): Observable<T>;
    update(id: number, column:string, newValue: string): Observable<T>;
    delete(id: number): Observable<boolean>;

    getAll(page: number, size: number): Observable<T[]>;
    getById(id: number): Observable<T>;
    getWithQuery(params: any): Observable<T[]>;
    getNumberRow(): Observable<number>
    
    
    
  }