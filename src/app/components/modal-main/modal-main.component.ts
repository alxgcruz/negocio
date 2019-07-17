import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-modal-main',
  templateUrl: './modal-main.component.html',
  styleUrls: ['./modal-main.component.scss'],
})
export class ModalMainComponent implements OnInit {

  @Input() formulario;
  @Input() objeto;
  categorias: any[];

  constructor(private modal: ModalController, private crudService: CrudService) { }

  ngOnInit() {
    if (this.formulario === 'productos') {
      this.crudService.init('categorias');
      this.crudService.getAll().subscribe(resp => {
        console.log('Obteniendo categorias->', resp);
        this.categorias = resp;
      });
      this.crudService.init('productos');
    }
  }

  addObjeto() {

  }

  closeModal() {
    this.modal.dismiss();
  }

  salirConArgumentos() {
    this.modal.dismiss({
      objeto: this.objeto
    });
  }

  salirSinArgumentos() {
    this.modal.dismiss();
  }

}
