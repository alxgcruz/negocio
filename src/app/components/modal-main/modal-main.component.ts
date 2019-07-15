import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-main',
  templateUrl: './modal-main.component.html',
  styleUrls: ['./modal-main.component.scss'],
})
export class ModalMainComponent implements OnInit {

  @Input() formulario;
  @Input() objeto;

  constructor(private modal: ModalController) { }

  ngOnInit() {

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
