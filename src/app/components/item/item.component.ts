import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalMainComponent } from '../modal-main/modal-main.component';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {

  @Input() objeto: any = {};
  @Input() indice: number;
  @Input() formulario: string;

  ver = false;

  constructor( private modal: ModalController, private crudService: CrudService ) { }

  ngOnInit() {
    this.crudService.init('categorias');
    this.crudService.getOne(this.objeto.categoria).subscribe( resp => {
      if (resp !== null) {
        this.objeto.categoria = resp.nombre;
      }
    });
    this.crudService.init( this.formulario );
  }

  verRespuesta() {
    this.ver ? this.ver = false : this.ver = true;
  }

  async abrirModal() {
    console.log(this.objeto);
    const modal = await this.modal.create({
      component: ModalMainComponent,
      componentProps: {
        formulario: this.formulario,
        objeto: this.objeto
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    //console.log(data.objeto);
    if ( data ) {
      this.objeto = data.objeto;
      this.crudService.update( this.objeto );
      // this.storage.set('idioma', this.idioma);
    }
  }

  eliminar() {
    console.log('eliminando');
    this.crudService.delete( this.objeto.id );
  }
}
