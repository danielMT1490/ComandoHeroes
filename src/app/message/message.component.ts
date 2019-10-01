import { Component, OnInit } from '@angular/core';
import { MessageService } from "../Services/message.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})

export class MessageComponent implements OnInit {

  //Al inyectar el servicio como publico se puede acceder a el desde fuera de la clase del componente
  //para poder usar en la vista etc.
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
