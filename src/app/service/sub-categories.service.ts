import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SubCategories } from '../interface/sub-categories';

@Injectable({
  providedIn: 'root'
})
export class SubCategoriesService {
  private apiUrl:string
  private searchCategories: number;

  private searchCategories$: BehaviorSubject<number>;

  constructor(private http:HttpClient) {
    this.apiUrl ='https://static.compragamer.com/test/subcategorias.json';
    this.searchCategories$ = new BehaviorSubject(0);
   }

   getSubCategories():Observable<SubCategories[]>{
    return this.http.get<SubCategories[]>(this.apiUrl);
   }

   get searchCategorieValue() {
    return this.searchCategories$.asObservable();
  }

  public changeCategorieValue(newValue: number) {
    this.searchCategories = newValue;
    this.searchCategories$.next(this.searchCategories);
  }
}
