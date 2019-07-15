import { Component, OnInit } from '@angular/core';
import { ModalMainComponent } from '../../components/modal-main/modal-main.component';
import { ModalController } from '@ionic/angular';
import { CategoriasService } from '../../services/categorias.service';
import { CrudService } from '../../services/crud.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {

  categorias: any = [];
  categoria: any = {};

  constructor(private modal: ModalController, private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.init('categorias');
    this.crudService.getAll().subscribe(resp => {
      console.log('Obteniendo categorias->', resp);
      this.categorias = resp;
    });
  }

  async abrirModal() {
    const modal = await this.modal.create({
      component: ModalMainComponent,
      componentProps: {
        formulario: 'categorias',
        objeto: this.categoria
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data);
    if (data) {
      this.categoria = data.objeto;
      this.crudService.add(this.categoria);
    }
  }
}
