import { Injectable } from '@angular/core';
//Importamos los objeteos con los que trabajeremos
import { Hero } from "../DTO/Hero";
import { HEROES } from "../DTO/mock-Hero";
//importamos los observables y el operador
import { Observable, of } from 'rxjs';
//Inyectamos el servicio de mensaje
import { MessageService } from "../Services/message.service";

//el decorador refleja que es un servicio inyectable
@Injectable({
  //metadata provide describe el modulo donde se inyectará
  providedIn: 'root'
})

export class HeroService {

  //Inyectamos nuestro servicio de Mensajes cuado es privada es par el uso exclusivo de la clase
  constructor(private MessageServie: MessageService ) { }

  //Métodos que pasa los datos simplemente
  getHeroesPromesa(): Hero[]{
    return HEROES;
  }

  //Creamos el metodo que devuelve los datos
  getHeroes():Observable<Hero[]>{
    //El servicio inyectado registra un mensaje
    this.MessageServie.add('HeroService: fetched heroes');
    //el operador rxjs of genera un observable de una lista de heroes
    return of(HEROES);
  }
}
