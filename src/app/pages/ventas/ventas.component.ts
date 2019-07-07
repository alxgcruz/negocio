import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss'],
})
export class VentasComponent implements OnInit {
  cant = 0.00;
  inmporte = 0;
  precio = 0;
  subzona = '';

  zonas = [
    {
    id: '1',
    texto: 'Riveras',
  }, {
    id: '2',
    texto: '5 señores',
  }, {
    id: '3',
    texto: 'Centro',
}, {
    id: '4',
    texto: 'Xoxocotlan',
  }];

  clientes = [
    {
    id: '1',
    texto: 'Gamaliel',
    zona: '1',
  }, {
    id: '2',
    texto: 'Hugo',
    zona: '1',
  }, {
    id: '3',
    texto: 'David',
    zona: '2',
}, {
    id: '4',
    texto: 'Niño',
    zona: '3',
  }];

  categorias = [
    {
    id: '1',
    texto: 'Palma de primera',
  }, {
    id: '2',
    texto: 'Columbia',
  }, {
    id: '3',
    texto: 'Country',
}, {
    id: '4',
    texto: 'Balley',
}, {
    id: '5',
    texto: 'Brixton',
  }];

  productos = [
    {
    id: '1',
    texto: 'Palma de primera cafe',
    precio: 12,
  }, {
    id: '2',
    texto: 'Columbia negro',
    precio: 20,
  }, {
    id: '3',
    texto: 'Country rojo',
    precio: 30,
}, {
    id: '4',
    texto: 'Balley azul',
    precio: 40,
}, {
    id: '5',
    texto: 'Brixton sptm',
    precio: 50,
  }];

  constructor() { }

  ngOnInit() {}

}
