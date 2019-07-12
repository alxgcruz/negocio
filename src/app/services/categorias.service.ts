import { Injectable } from '@angular/core';

import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private cateCollection: AngularFirestoreCollection<any>;
  private categorias: Observable<any[]>;
  cateDoc: AngularFirestoreDocument<any>;
  categoria: Observable<any>;
  public selected: any = {
    id: null
  };

  constructor(private afs: AngularFirestore ) {

    this.cateCollection = afs.collection<any>('categorias');
    this.categorias = this.cateCollection.valueChanges();
   }
   getAllcategorias() {

    return this.categorias = this.cateCollection.snapshotChanges()
    .pipe( map( cambios => {
      return cambios.map( accion => {
        const data = accion.payload.doc.data() as any;
        data.id = accion.payload.doc.id;
        return data;
      });
    }));
  }

  getOnecategoria(idcategoria: string) {
    this.cateDoc = this.afs.doc<any>(`categorias/${idcategoria}`);
    return this.categoria = this.cateDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as any;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  addcategoria(categoria: any): void {
    this.cateCollection.add({...categoria}).then( resp => {
    });
  }

  updatecategoria(categoria: any): void {
    const idcategoria = categoria.id;
    this.cateDoc = this.afs.doc<any>(`categorias/${idcategoria}`);
    this.cateDoc.update(categoria).then( resp => {
    });
  }

  deletecategoria(idcategoria: string): void {
    this.cateDoc = this.afs.doc<any>(`categorias/${idcategoria}`);
    this.cateDoc.delete();
  }
}
