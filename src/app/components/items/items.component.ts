import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {

  @Input() arreglo = [];
  @Input() formulario: string;

  constructor() { }

  ngOnInit() {
    console.log(this.arreglo);
  }

}
