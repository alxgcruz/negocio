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
    if ( idx > -1 ) {
      const suma: number = parseFloat(this.arrayProductos[idx].cantidad) + this.cantidad;
      this.arrayProductos[idx].cantidad = suma;
    } else {
      this.productoSeleccionado.cantidad = this.cantidad;
      // tslint:disable-next-line: radix
      this.productoSeleccionado.cantidad = parseInt(this.productoSeleccionado.cantidad);
      this.arrayProductos.push( this.productoSeleccionado );
    }
    this.limpiar();
  }

  disminuir() {
    const idx = this.arrayProductos.indexOf(this.productoSeleccionado);
    if ( idx > -1 ) {
      this.arrayProductos[idx].cantidad = this.arrayProductos[idx].cantidad - this.cantidad;
      if (this.arrayProductos[idx].cantidad <= 0) {
        this.arrayProductos.splice(idx, 1);
      }
    }
    this.limpiar();
  }

  limpiar() {
    this.cantidad = 0;
    this.productoSeleccionado = {};
  }

  guardar() {

  }

}
