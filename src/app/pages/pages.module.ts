import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasComponent } from './ventas/ventas.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ProductosComponent } from './productos/productos.component';

@NgModule({
  declarations: [
    VentasComponent,
    LoginComponent,
    ProductosComponent
  ],
  exports: [
    VentasComponent,
    LoginComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    ComponentsModule
  ]
})
export class PagesModule { }
