import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ModalCategoriasComponent } from './modal-categorias/modal-categorias.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ModalCategoriasComponent
  ],
  exports: [
    HeaderComponent,
    ModalCategoriasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
