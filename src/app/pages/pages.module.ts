import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasComponent } from './ventas/ventas.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormsModule } from '@angular/forms';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProductosComponent } from './productos/productos.component';
import { PipesModule } from '../pipes/pipes.module';
import { ZonasComponent } from './zonas/zonas.component';
import { ClientesComponent } from './clientes/clientes.component';

@NgModule({
  declarations: [
    VentasComponent,
    LoginComponent,
    CategoriasComponent,
    ProductosComponent,
    UsuariosComponent,
    ZonasComponent,
    ClientesComponent
  ],
  exports: [
    VentasComponent,
    LoginComponent,
    CategoriasComponent,
    ProductosComponent,
    UsuariosComponent,
    ZonasComponent,
    ClientesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    ComponentsModule,
    PipesModule
  ]
})
export class PagesModule { }
