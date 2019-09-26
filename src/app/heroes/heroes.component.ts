import { Component, OnInit } from '@angular/core';
//importamos el Dto
import { Hero } from "../DTO/Hero"
import { HEROES } from "../DTO/mock-Hero";


//informacion del componente
@Component({
  //nombre del metadato del coponente
  selector: 'app-heroes',
  //html vinculado
  templateUrl: './heroes.component.html',
  //stylos del componente
  styleUrls: ['./heroes.component.scss']
})

//Clase anidada al component
export class HeroesComponent implements OnInit {
  
  hero: Hero = {Id:1 , Name:"WindStorm", Edad:23};
  selectedHero : Hero;
  heroes: Hero[] = HEROES;

  constructor() { 
  }

  ngOnInit() {
  }

  selectHero(hero: Hero){
      this.selectedHero = hero;
      console.log(this.selectedHero);
  }

}
