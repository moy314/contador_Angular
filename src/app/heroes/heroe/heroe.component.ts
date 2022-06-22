import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})

export class heroeComponent{

    nombre  :string = 'Iron man';
    edad    :number = 45;

    get nombreCapitalizado(){
        return this.nombre.toLocaleUpperCase();
    }

    obtenerNombre():string {

        return `${this.nombre} - ${this.edad}`;
    }



    cambiarNombre():void{

        this.nombre = 'Spider-Man'

    }

    cambiarEdad(){

        this.edad = 30;

    }



}