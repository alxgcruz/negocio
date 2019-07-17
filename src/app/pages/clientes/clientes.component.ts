import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalMainComponent } from '../../components/modal-main/modal-main.component';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {
  clientes: any = [];
  cliente: any = {};


  constructor(private modal: ModalController, private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.init('clientes');
    this.crudService.getAll().subscribe(resp => {
      console.log('Obteniendo clientes->', resp);
      this.clientes = resp;
    });
  }

  async abrirModal() {
    const modal = await this.modal.create({
      component: ModalMainComponent,
      componentProps: {
        formulario: 'clientes',
        objeto: this.cliente
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data);
    if (data) {
      this.cliente = data.objeto;
      this.crudService.add(this.cliente);
    }
  }

}
