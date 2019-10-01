import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  //creamos los mensajes por defecto vacio
  messages: string[] = [];

  constructor() { }

  //definimos que es un metodo void
  add(message: string): void{
    //con push añadimos un dato a la lista
    this.messages.push(message);
  }

  clear(): void{
    //vaciamos la lista
    this.messages = [];
  }
}
