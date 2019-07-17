import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ModalMainComponent } from './modal-main/modal-main.component';
import { FormsModule } from '@angular/forms';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ModalMainComponent,
    ItemsComponent,
    ItemComponent,
    MenuComponent
  ],
  exports: [
    HeaderComponent,
    ModalMainComponent,
    ItemsComponent,
    ItemComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule
  ]
})
export class ComponentsModule { }
