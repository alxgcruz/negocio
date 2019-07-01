import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NavController } from '@ionic/angular';
import { UiService } from 'src/app/services/ui.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {


  loginUser = {
    email: 'ale@gmail',
    password: '123456'
  };

  constructor( private usuarioService: UsuarioService, private navCtrl: NavController, private uiService: UiService ) { }

  ngOnInit() {}

  async login( fLogin: NgForm ) {
    if ( fLogin.invalid ) {
      this.uiService.alertaInformativa('Los campos están vacíos');
      return;
    }
    // const valido = await this.usuarioService.login( this.loginUser.email, this.loginUser.password );
    const valido = true;

    if ( valido ) {
      this.navCtrl.navigateRoot('/ventas', { animated: true });
    } else {
      this.uiService.alertaInformativa('Usuario/Contraseña no son correctos');
    }
  }

}
