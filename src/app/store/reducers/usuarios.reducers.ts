import { Action, createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import {
  cargarUsuarios,
  cargarUsuariosError,
  cargarUsuariosSuccess,
} from '../actions';

export interface usuariosState {
  users: Usuario[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usuariosInitialState: usuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

const _usuariosReducer = createReducer(
  usuariosInitialState,

  on(cargarUsuarios, (state) => ({
    ...state,
    loading: true,
  })),

  on(cargarUsuariosSuccess, (state, {usuarios}) => ({
    ...state,
    loading_: false,
    loaded: false,
    users: [ ...usuarios ],
  })),

  on(cargarUsuariosError, (state, {payload}) => ({
    ...state,
    loading_: false,
    loaded: true,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message
    }
  }))
);

export function usuariosReducer(state: usuariosState | undefined, action: Action) {
  return _usuariosReducer(state, action);
}
