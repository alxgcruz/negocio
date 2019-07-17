import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrudService } from '../../services/crud.service';
import { ModalMainComponent } from '../../components/modal-main/modal-main.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {

  usuarios: any = [];
  usuario: any = {};
  palabraBuscada = '';

  constructor(private modal: ModalController, private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.init('usuarios');
    this.crudService.getAll().subscribe( resp => {
      console.log('Obteniendo usuarios->', resp);
      this.usuarios = resp;
    });
  }

  async abrirModal() {
    const modal = await this.modal.create({
      component: ModalMainComponent,
      componentProps: {
        formulario: 'usuarios',
        objeto: this.usuario
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    console.log(data);
    if ( data ) {
      this.usuario = data.objeto;
      this.crudService.add( this.usuario );
      this.usuario = {};
    }
  }

}
