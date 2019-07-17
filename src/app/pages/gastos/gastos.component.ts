import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrudService } from '../../services/crud.service';
import { ModalMainComponent } from '../../components/modal-main/modal-main.component';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss'],
})
export class GastosComponent implements OnInit {

  gastos: any = [];
  gasto: any = {};
  palabraBuscada = '';


  constructor(private modal: ModalController, private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.init('gastos');
    this.crudService.getAll().subscribe(resp => {
      console.log('Obteniendo gastos->', resp);
      this.gastos = resp;
    });
  }
  async abrirModal() {
    const modal = await this.modal.create({
      component: ModalMainComponent,
      componentProps: {
        formulario: 'gastos',
        objeto: this.gasto
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data);
    if (data) {
      this.gasto = data.objeto;
      this.crudService.add(this.gasto);
      this.gasto = {};
    }
  }

}
