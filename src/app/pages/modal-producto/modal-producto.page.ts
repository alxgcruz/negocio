import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-producto',
  templateUrl: './modal-producto.page.html',
  styleUrls: ['./modal-producto.page.scss'],
})
export class ModalProductoPage implements OnInit {

  constructor(private modal: ModalController) { }

  ngOnInit() {
  }

  addProducto() {

  }

  closeModal() {
    this.modal.dismiss();
  }

}
