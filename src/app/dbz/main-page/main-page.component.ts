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

    nombre:'',
    poder : 0

  }

  agregar( ){
        // event:any
    // event.preventDefault();
    if(this.nuevo.nombre.trim().length === 0){//.trim() elimina espacios en blanco
      return;
    }

    this.personajes.push(this.nuevo);
    this.nuevo = {

      nombre:'',
      poder : 0
    }
    console.log(this.nuevo);
  }


  

}
