import { CommonModule } from '@angular/common';
import { NgModule }from '@angular/core';
import { heroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        heroeComponent,
        ListadoComponent
    ],

    exports:[// que cosas quiero hacer visibles fuera del modulo
        ListadoComponent
    ],

    imports:[//aqui van modulos
        CommonModule

    ]



})



export class heroesModule{}