import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {

  arrayUsers: any[] = [
    {
      id: 1,
      name: 'Alex',
      lastname: 'Gómez',
      username: 'Máster',
      password: '123'
    },
  {
    id: 2,
    name: 'Zuriel',
    lastname: 'Zárate',
    username: 'Padrote',
    password: '123456'
  }];

  itemSelected(event) {
    console.log('item selected');
  }
   constructor() { }

  ngOnInit() {}

}
