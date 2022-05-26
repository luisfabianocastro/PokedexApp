import { Component, OnInit } from '@angular/core';
import { PokedexAppService } from '../services/pokedex-app.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(public pokedexAppService:PokedexAppService) {}

  ngOnInit(){
    this.pokedexAppService.buscarTodosPokemons().subscribe(dados => {console.log(dados)})
  }

}
