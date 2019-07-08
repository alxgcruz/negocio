import { Injectable } from '@angular/core';

import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private prodCollection: AngularFirestoreCollection<any>;
  private productos: Observable<any[]>;
  
  prodDoc: AngularFirestoreDocument<any>;
  producto: Observable<any>;
  
  public selected: any = {
    id: null
  };

  constructor( private afs: AngularFirestore ) {

    this.prodCollection = afs.collection<any>('productos');
    this.productos = this.prodCollection.valueChanges();
  
  }

  getAllproductos() {

    return this.productos = this.prodCollection.snapshotChanges()
    .pipe( map( cambios => {
      return cambios.map( accion => {
        const data = accion.payload.doc.data() as any;
        data.id = accion.payload.doc.id;
        return data;
      });
    }));
  }

  getOneproducto(idproducto: string) {
    this.prodDoc = this.afs.doc<any>(`productos/${idproducto}`);
    return this.producto = this.prodDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as any;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  addproducto(producto: any): void {
    this.prodCollection.add({...producto}).then( resp => {
    });
  }

  updateproducto(producto: any): void {
    const idproducto = producto.id;
    this.prodDoc = this.afs.doc<any>(`productos/${idproducto}`);
    this.prodDoc.update(producto).then( resp => {
    });
  }

  deleteproducto(idproducto: string): void {
    this.prodDoc = this.afs.doc<any>(`productos/${idproducto}`);
    this.prodDoc.delete();
  }
}
