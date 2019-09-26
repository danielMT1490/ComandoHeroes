//el decorador Input genrea un listener que espera de si componente padre
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from "../DTO/Hero";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  //espera una variable hero de su componente padre
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
