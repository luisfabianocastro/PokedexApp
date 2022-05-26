import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexAppService {

  private url='https://pokeapi.co/api/v2/';

  constructor(private http:HttpClient) { }

  buscarTodosPokemons() {
    return this.http.get(this.url);
  }
}

