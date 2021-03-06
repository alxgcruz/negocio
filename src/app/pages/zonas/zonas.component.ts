import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrudService } from '../../services/crud.service';
import { ModalMainComponent } from '../../components/modal-main/modal-main.component';

@Component({
  selector: 'app-zonas',
  templateUrl: './zonas.component.html',
  styleUrls: ['./zonas.component.scss'],
})
export class ZonasComponent implements OnInit {

  zonas: any = [];
  zona: any = {};
  palabraBuscada = '';

  constructor(private modal: ModalController, private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.init('zonas');
    this.crudService.getAll().subscribe( resp => {
      console.log('Obteniendo zonas->', resp);
      this.zonas = resp;
    });
  }

  async abrirModal() {
    const modal = await this.modal.create({
      component: ModalMainComponent,
      componentProps: {
        formulario: 'zonas',
        objeto: this.zona
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data);
    if ( data ) {
      this.zona = data.objeto;
      await this.crudService.add( this.zona );
      this.zona = {};
    }
  }

}
