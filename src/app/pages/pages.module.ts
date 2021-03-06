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
import { GastosComponent } from './gastos/gastos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { InventarioComponent } from './inventario/inventario.component';

@NgModule({
  declarations: [
    VentasComponent,
    LoginComponent,
    CategoriasComponent,
    ProductosComponent,
    UsuariosComponent,
    ZonasComponent,
    GastosComponent,
    ClientesComponent,
    InventarioComponent
  ],
  exports: [
    VentasComponent,
    LoginComponent,
    CategoriasComponent,
    ProductosComponent,
    UsuariosComponent,
    ZonasComponent,
    GastosComponent,
    ClientesComponent,
    InventarioComponent
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
