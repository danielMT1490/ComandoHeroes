import { Component, OnInit } from '@angular/core';
import { Hero } from '../DTO/Hero';
import { HeroService } from '../Services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      //solo mostramos 4 heroes de los que tre el servicio
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}