import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appPages = [
    {
      titulo  : 'Ventas',
      icono   : 'cash',
      url     : '/ventas'
    }, 
    {
      titulo  : 'Categorias',
      icono   : 'cash',
      url     : '/categorias'
    },
    {
      titulo: 'Productos',
      icono: 'cube',
      url: '/productos'
    },
    {
      titulo: 'Zonas',
      icono: 'map',
      url: '/zonas'
    },
    {
      titulo: 'Gastos',
      icono: 'map',
      url: '/gastos'
    },{
      titulo: 'Usuarios',
      icono: 'person',
      url: '/usuarios'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
