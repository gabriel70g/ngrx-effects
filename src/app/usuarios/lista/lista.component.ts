import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import { cargarUsuarios } from 'src/app/store/actions';

import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit, OnDestroy {

  usuarios: Usuario[]=[];
  loading= false;
  error: any = undefined;
  suscription: Subscription;

  constructor(
    private sotre: Store<AppState>) {
      this.suscription =  this.sotre.select('usuarios').subscribe(({users, loading, error}) => {
        this.usuarios = users;
        this.loading = loading;
        this.error = error
      })

      this.sotre.dispatch(cargarUsuarios())

  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }

}
