import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-categorias',
  templateUrl: './modal-categorias.component.html',
  styleUrls: ['./modal-categorias.component.scss'],
})
export class ModalCategoriasComponent implements OnInit {

  constructor(private modal: ModalController) { }

  ngOnInit() {

  }
  addCategoria() {

  }
  closeModal() {
    this.modal.dismiss();
  }
}

