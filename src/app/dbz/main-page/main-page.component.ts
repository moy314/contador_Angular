import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


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


  personajes :Personaje[] = [
    {
      nombre:'goku',
      poder:15000
    },
    {
      nombre:'vegeta',
      poder:8500
    }
  ]

  nuevo:Personaje = {

    nombre:'maestro roshi',
    poder : 9000

  }

  agregarNuevoPersonaje(argumento :Personaje ){

    this.personajes.push(argumento)
  }
  

}
