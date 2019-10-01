//el decorador Input genrea un listener que espera de si componente padre
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from "../DTO/Hero";
//importamos el servico de las rutas para tener acceso a la rutas registradas
import { ActivatedRoute } from '@angular/router';
//nos trae la informacion de la barra url del navegador
import { Location } from '@angular/common';
//El servicio de heroes
import { HeroService }  from '../Services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  //espera una variable hero de su componente padre
  @Input() hero: Hero;

  constructor
  ( 
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    //obtenemos el parametro de la routa y llamamos al servicio para obtener el Hero
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  //Volvemos al segmento anterior
  goBack(): void {
    this.location.back();
  }

}
