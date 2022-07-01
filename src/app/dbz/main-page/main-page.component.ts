import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


//creando interfaz:

// interface Personaje {

//   nombre :string,
//   poder  :number

// }





@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  // personajes:Personaje[] = [];


  // get personajes():Personaje[]{
  //     return this.dbzService.personajes;
  // }
  nuevo:Personaje = {

    nombre:'maestro roshi',
    poder : 9000

  }

  // agregarNuevoPersonaje(argumento :Personaje ){

  //   this.personajes.push(argumento)
  // }
  
  // constructor( private dbzService :  DbzService){

    // this.personajes = dbzService.personajes;

  //}

  constructor(){}

}
