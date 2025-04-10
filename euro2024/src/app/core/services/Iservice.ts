import { Observable } from "rxjs";

export interface IService<T> {

    insert(item: T[]): Observable<T>;
    update(column: string, id: number, newValue: string | number): Observable<T>;
    delete(id: number): Observable<boolean>;

    getAll(page: number, size: number): Observable<T[]>;
    getById(id: number): Observable<T>;
    getWithQuery(params: any): Observable<T[]>;
    countRow(): Observable<number>
    
    
    
  }