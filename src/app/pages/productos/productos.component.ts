import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalProductoPage } from '../modal-producto/modal-producto.page';
import { ProductosService } from '../../services/productos.service';
import { CrudService } from '../../services/crud.service';
import { ModalMainComponent } from '../../components/modal-main/modal-main.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {

  productos: any[];
  producto: any = {};

  constructor(private modal: ModalController, private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.init('productos');
    this.crudService.getAll().subscribe( resp => {
      console.log('Obteniendo productos->', resp);
      this.productos = resp;
    });
  }

  async abrirModal() {
    const modal = await this.modal.create({
      component: ModalMainComponent,
      componentProps: {
        formulario: 'productos',
        objeto: this.producto
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log('data->', data);
    if ( data ) {
      this.producto = data.objeto;
      this.crudService.add( this.producto );
    }
  }

}
