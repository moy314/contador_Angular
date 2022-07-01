import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{

    
  private _personajes :Personaje[] = [
    {
      nombre:'goku',
      poder:15000
    },
    {
      nombre:'vegeta',
      poder:8500
    }
  ]


    constructor(){
        // console.log('servicio inicializado');
    }

    agregarPersonaje(personaje:Personaje){

        this._personajes.push(personaje);
    }

    get personajes():Personaje[]{
        return [...this._personajes]
    }


}