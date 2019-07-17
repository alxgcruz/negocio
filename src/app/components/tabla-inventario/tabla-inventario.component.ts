import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-inventario',
  templateUrl: './tabla-inventario.component.html',
  styleUrls: ['./tabla-inventario.component.scss'],
})
export class TablaInventarioComponent implements OnInit {

  @Input() items = [];

  constructor() { }

  ngOnInit() {}

}
