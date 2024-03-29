import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model'

export const cargarUsuario = createAction('[Usuario] Cargar Usuarios',
  props<{ id: string | null}>());

export const cargarUsuarioSuccess = createAction(
  '[Usuario] Cargar Usuario Success',
  props<{ usuario: Usuario }>()
);

export const cargarUsuarioError = createAction(
  '[Usuario] Cargar Usuario Error',
  props<{ payload: any }>()
);
