import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import { cargarUsuario } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit, OnDestroy {
  usuario: Usuario | null = null;
  loading = false;
  error: any = undefined;
  suscrptcion : Subscription;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    this.suscrptcion = this.store
      .select('usuario')
      .subscribe(({ user, loading, error }) => {
        this.usuario = user;
        this.loading = loading;
        this.error = error;
        console.log(user);
      });

    const id = this.route.snapshot.paramMap.get('id');
    console.log('id de usuario', id);

    this.store.dispatch(cargarUsuario({ id }));
  }

  ngOnInit(): void {}
  ngOnDestroy() {
    this.suscrptcion.unsubscribe();
  }
}
