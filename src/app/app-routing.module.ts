import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { VentasComponent } from './pages/ventas/ventas.component';
import { LoginComponent } from './pages/login/login.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ZonasComponent } from './pages/zonas/zonas.component';
import { GastosComponent } from './pages/gastos/gastos.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'categorias', component: CategoriasComponent},
  { path: 'productos', component: ProductosComponent },
  { path: 'zonas', component: ZonasComponent },
  { path: 'gastos', component: GastosComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
