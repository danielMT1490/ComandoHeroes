import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
//Importamos el modulo de rutas
import { RouterModule, Routes } from "@angular/router";
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

//declaramos las rutas que se van a registar al modulo de rutas
//es importante registrar las rutas por orden
const routes : Routes = [
  //ruta vacia
  {path:'', component: DashboardComponent},
  //podemos definir el componente para la raiz se puede poner componente fijo o redireccionar
  //{path:'', redirectTo:'dashboard' , pathMatch: 'full'},
 
  //cada ruta se define con el path y el nombre del componente
  {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  //podemos definir dos segmentos para un componente incluso con parámetros
  {path: 'hero-detail/:id', component: HeroDetailComponent},
  //cualquier parametro redirecionamos al raiz
  {path:'**', redirectTo: '/', pathMatch:'full'}
];


@NgModule({
  declarations: [],
  imports: [
    //Los modulos de rutas no necesita el CommomModule para no importar librerias no necesarias
    //CommonModule

    //Le indicamos que cuando haya cambios en la ruta redirija a los componentes correctos
    RouterModule.forRoot(routes)
  ],
  //exportamos el modulo de rutas en el appmodule para que las tenga registradas
  exports: [RouterModule]
})
export class AppRoutingModule { }
