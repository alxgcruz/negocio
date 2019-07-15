import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor( public alertController: AlertController, public toastController: ToastController ) { }


  async alertaInformativa( mensaje: string  ) {
    const alert = await this.alertController.create({
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentToast( mensaje: string ) {
    const toast = await this.toastController.create({
      message: mensaje,
      position: 'bottom',
      duration: 1500
    });
    toast.present();
  }


}
