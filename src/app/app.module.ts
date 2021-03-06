import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//importar la libreria de formularios para poder interactuar con ellos
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessageComponent } from './message/message.component';
//importa el nuevo modulo que hemos creado
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

//aqui ponemos a disposicion de toda la aplicacion los modulos que importamos
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
