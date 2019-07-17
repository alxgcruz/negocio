import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../services/inventario.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss'],
})
export class InventarioComponent implements OnInit {

  categorias: any[] = [];
  productos: any[] = [];
  arrayProductos: any[] = [];
  productoSeleccionado: any = {};
  categoriaSeleccionada: any = {};
  cantidad: number;

  constructor( private invService: InventarioService ) { }

  ngOnInit() {
    this.invService.getCategorias().subscribe( resp => {
      console.log('categorias->', resp);
      this.categorias = resp;
      this.categoriaSeleccionada = this.categorias[0];
    });
    this.invService.getProductos().subscribe( resp => {
      console.log('productos->', resp);
      this.productos = resp;
    });
  }

  aumentar() {

    const idx = this.arrayProductos.indexOf(this.productoSeleccionado);
    console.log('idx->', idx);
    if ( idx > -1 ) {
      this.arrayProductos[idx].cantidad = this.arrayProductos[idx].cantidad + this.cantidad;
    } else {
      this.productoSeleccionado.cantidad = this.cantidad;
      // tslint:disable-next-line: radix
      this.productoSeleccionado.cantidad = parseInt(this.productoSeleccionado.cantidad);
      console.log('producto a agregar->', this.productoSeleccionado);
      this.arrayProductos.push( this.productoSeleccionado );
    }

  }

  disminuir() {

    const idx = this.arrayProductos.indexOf({id: this.productoSeleccionado.id});
    if ( idx !== -1 ) {
      this.arrayProductos[idx].cantidad -= this.cantidad;
    } else {
      this.productoSeleccionado.cantidad = this.cantidad;
      this.arrayProductos.push( this.productoSeleccionado );
    }

  }

  guardar() {

  }

}
