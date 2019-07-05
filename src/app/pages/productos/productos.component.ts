import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {

  productos: any[];

  constructor() {
    this.initItem();
    this.productos[0].open = true;
  }

  ngOnInit() { }

  initItem() {
    this.productos = [
      {
        nombre: 'Refresco',
        detalles: [
          {
            categoria: 'Bebidas',
            descripcion: 'Refresco de cola',
            costo: [
              {
                ideal: 15,
                minimo: 10,
                maximo: 20
              }
            ],
            marca: 'Coca Cola',
            existencia: 10,
            precio: [
              {
                uno: 16,
                dos: 18,
                tres: 26,
                cuatro: 36
              }
            ],
            observaciones: 'Caducan mañana'
          }
        ]
      },
      {
        nombre: 'Galletas',
        detalles: [
          {
            precio: 10,
            marca: 'Gamesa',
            cantidad: 2
          }
        ]
      },
      {
        nombre: 'Sabritas',
        detalles: [
          {
            precio: 11,
            marca: 'Sabritas',
            cantidad: 15
          }
        ]
      },
      {
        nombre: 'Jugo',
        detalles: [
          {
            precio: 11.5,
            marca: 'Jumex',
            cantidad: 22
          }
        ]
      }
    ];
  }

  toggleProducto(index) {
    this.productos[index].open = !this.productos[index].open;

    if (this.productos[index].open) {
      this.productos
      .filter((item, itemIndex) => itemIndex !== index)
      .map(item => item.open = false);
    }
  }

  toggleDetalles(index, childIndex) {
    this.productos[index].children[0].children[childIndex].open = !this.productos[index].children[0].children[childIndex].open;
  }

  getNombre(ev: any) {
    this.initItem();

    const val = ev.target.value;

    if (val && val.trim() !== '') {
      for (let i of this.productos) {
        this.productos[i][0] = this.productos[i][0].filter((item) => {
          return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        });
      }
    }
  }

}
