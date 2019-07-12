import { Component, OnInit } from '@angular/core';
import { ModalCategoriasComponent } from '../../components/modal-categorias/modal-categorias.component';
import { ModalController } from '@ionic/angular';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {

  categorias: any[];
  value = 0;

  constructor(private modal: ModalController, private cateService: CategoriasService) {
    this.initItem();
    this.categorias[0].open = true;
   }

  ngOnInit() {
  this.cateService.getAllcategorias();
}

async openModal() {
  const modal = await this.modal.create({
    component: ModalCategoriasComponent,
    componentProps: {
      custom_id: this.value
    }
  });
  modal.present();
}
initItem() {
  this.categorias = [
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

toggleCategoria(index) {
  this.categorias[index].open = !this.categorias[index].open;

  if (this.categorias[index].open) {
    this.categorias
    .filter((item, itemIndex) => itemIndex !== index)
    .map(item => item.open = false);
  }
}

toggleDetalles(index, childIndex) {
  this.categorias[index].children[0].children[childIndex].open = !this.categorias[index].children[0].children[childIndex].open;
}

getNombre(ev: any) {
  this.initItem();

  const val = ev.target.value;

  if (val && val.trim() !== '') {
      this.categorias = this.categorias.filter((item) => {
        return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
  }
}
}
