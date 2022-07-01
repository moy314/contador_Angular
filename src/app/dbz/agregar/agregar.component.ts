import { Component, Input,  Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {

  // @Input() personajes:Personaje[] = [];

  @Input() nuevo:Personaje = {

    nombre:'',
    poder:0

  }

  @Output() onNuevoPersonaje: EventEmitter <Personaje> = new EventEmitter();

  agregar( ){
        // event:any
    // event.preventDefault();
    if(this.nuevo.nombre.trim().length === 0){//.trim() elimina espacios en blanco
      return;
    }

    console.log(this.nuevo);
    this.onNuevoPersonaje.emit(this.nuevo);
    // this.personajes.push(this.nuevo);
    this.nuevo = {

      nombre:'',
      poder : 0
    }

  }


  

}
