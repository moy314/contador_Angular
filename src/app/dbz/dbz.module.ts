//importaciones de angular

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//importaciones de terceros...

// importaciones del usuario
import { MainPageComponent } from './main-page/main-page.component';




@NgModule({
  declarations: [
    
    MainPageComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
