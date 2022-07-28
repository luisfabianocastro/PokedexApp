import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokedexAppService {
  public listaPokemon = [];

  private url = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  buscarTodosPokemons() {
    return this.http.get(`${this.url}pokemon`);
  }
}
