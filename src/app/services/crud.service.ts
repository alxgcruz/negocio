import { Injectable } from '@angular/core';

import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UiService } from './ui.service';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  col: string;
  private collection: AngularFirestoreCollection<any>;
  private array: Observable<any[]>;
  document: AngularFirestoreDocument<any>;
  object: Observable<any>;

  constructor( private afs: AngularFirestore, private uiservice: UiService ) {}

  init( coleccion: string ) {
    this.col = coleccion;
    this.collection = this.afs.collection<any>(`${ this.col }`);
    this.array = this.collection.valueChanges();
  }

  getAll() {

    return this.array = this.collection.snapshotChanges()
    .pipe( map( cambios => {
      return cambios.map( accion => {
        const data = accion.payload.doc.data() as any;
        data.id = accion.payload.doc.id;
        return data;
      });
    }));
  }

  getOne(idobject: string) {
    this.document = this.afs.doc<any>(`${ this.col }/${idobject}`);
    return this.object = this.document.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as any;
        data.id = action.payload.id;
        return data;
      }
    }));
  }

  add(object: any): void {
    this.collection.add({...object}).then( resp => {
      this.uiservice.presentToast('Se agregó correctamente');
    });
  }

  update(object: any): void {
    const idobject = object.id;
    delete object.id;
    this.document = this.afs.doc<any>(`${ this.col }/${idobject}`);
    this.document.update( object ).then( resp => {
      this.uiservice.presentToast('Se guardó correctamente');
    });
  }

  delete(idobject: string): void {
    this.document = this.afs.doc<any>(`${ this.col }/${idobject}`);
    this.document.delete().then( resp => {
      this.uiservice.presentToast('Se eliminó correctamente');
    });
  }

}
