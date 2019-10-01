import { Component, OnInit } from '@angular/core';
//importamos el Dto
import { Hero } from "../DTO/Hero"
//Hacemos referencia al servicio que nos trae los heroes
import { HeroService } from "../Services/hero.service";
import { MessageService } from "../Services/message.service";


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
  heroes: Hero[];

  //Inyectamos el servicio
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    //El servicio nos carga los datos al crear el componente
    //nos suscribimos a un obverbale y cada vez que se reciba la lista la asignamos a nuestra variable
    //la lambda nos dice que coge del observable solo los heroes
    this.heroService.getHeroes().subscribe(heroes =>{
      this.heroes = heroes
    });
  }

  //hero es propiedad de fucion por eso no mostramos los daos que hay inicializados en la clase
  selectHero(hero: Hero){
    //el servicio Message nos sirve de log al inyectarlo en este caso no necesita ser publico ya que este componente no lo muestra
      this.messageService.add(`Hero ${hero.Name} selected`)
      this.selectedHero = hero;
      console.log(this.selectedHero);
  }

}
