import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {

  categorias: any[];

  constructor(private cateService: CategoriasService) { }

  ngOnInit() {
    this.cateService.getAllcategorias().subscribe(chonte => {
      this.categorias = chonte;
      console.log(this.categorias);
    });
  }

}
