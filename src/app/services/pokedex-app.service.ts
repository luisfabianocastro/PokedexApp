import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexAppService {

  private url='https://pokeapi.co/api/v2/';

  constructor() { }
}

