import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Menu[]>;

  constructor( private menuService: MenuService ) { }

  ngOnInit() {
    this.componentes = this.menuService.getOpciones();
  }

}
