import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private collection: AngularFirestoreCollection<any>;
  private categorias: Observable<any[]>;
  private productos: Observable<any[]>;
  document: AngularFirestoreDocument<any>;
  object: Observable<any>;

  constructor( private afs: AngularFirestore, private uiservice: UiService ) { }

  getCategorias() {
    this.collection = this.afs.collection<any>('categorias');
    this.categorias = this.collection.valueChanges();
    return this.categorias = this.collection.snapshotChanges()
    .pipe( map( cambios => {
      return cambios.map( accion => {
        const data = accion.payload.doc.data() as any;
        data.id = accion.payload.doc.id;
        return data;
      });
    }));
  }

  getProductos() {
    this.collection = this.afs.collection<any>('productos');
    this.productos = this.collection.valueChanges();
    return this.productos = this.collection.snapshotChanges()
    .pipe( map( cambios => {
      return cambios.map( accion => {
        const data = accion.payload.doc.data() as any;
        data.id = accion.payload.doc.id;
        return data;
      });
    }));
  }
}
