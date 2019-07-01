import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;
  usuario: Usuario;

  constructor( private http: HttpClient, private storage: Storage, private navCtrl: NavController ) { }


  login( email: string, password: string ) {
    const data = { email, password};

    return new Promise( resolve => {
      this.http.post(`${ URL }/user/login`, data)
      .subscribe( async ( resp ) => {
        console.log(resp);

  // tslint:disable-next-line: no-string-literal
        if (resp['ok']) {
  // tslint:disable-next-line: no-string-literal
          await this.guardarToken( resp['token'] );
          resolve(true);
        } else {
          this.token = null;
          this.storage.clear();
          resolve(false);
        }
      });
    });
  }

  logout() {
    this.token    = null;
    this.usuario  = null;
    this.storage.clear();
    this.navCtrl.navigateRoot('/login', { animated: true } );
  }

  async guardarToken( token: string ) {
    this.token = token;
    await this.storage.set('token', token);
    await this.validaToken();
  }

  private async cargarToken() {
    this.token = await this.storage.get('token') || null;
  }

  async validaToken(): Promise<boolean> {

    await this.cargarToken();

    if ( !this.token ) {
      this.navCtrl.navigateRoot('/login');
      return Promise.resolve(false);
    }

    return new Promise<boolean>( resolve => {

      const headers = new HttpHeaders({
        'x-token': this.token
      });

      this.http.get(`${ URL }/user/`, { headers })
        .subscribe( resp => {

          // tslint:disable-next-line: no-string-literal
          if ( resp['ok'] ) {
            // tslint:disable-next-line: no-string-literal
            this.usuario = resp['usuario'];
            resolve(true);
          } else {
            this.navCtrl.navigateRoot('/login');
            resolve(false);
          }

      });

    });
  }

}
