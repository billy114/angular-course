import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produit} from '../../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  apiUrl = 'https://dummyjson.com/';
  constructor(private http: HttpClient) { }

  getProduits () : Observable<{products : Produit[]}> {
    return this.http.get<{products : Produit[]}>(this.apiUrl + "products");
  }

  getProduitById(id: number): Observable<Produit> {
    return this.http.get<Produit>(this.apiUrl + "products/" + id);
  }
}
