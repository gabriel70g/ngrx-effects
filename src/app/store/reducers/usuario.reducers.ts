import { Action, createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import {
  cargarUsuario,
  cargarUsuarioError,
  cargarUsuarioSuccess,
} from '../actions';

export interface usuarioState {
  id: string | null,
  user: Usuario| null,
  loaded: boolean,
  loading: boolean,
  error: any,
}

export const usuarioInitialState: usuarioState = {
  id: null,
  user: null,
  loaded: false,
  loading: false,
  error: null,
};

const _usuarioReducer = createReducer(
  usuarioInitialState,

  on(cargarUsuario, (state, { id } ) => ({
    ...state,
    loading: true,
    id
  })),

  on(cargarUsuarioSuccess, (state, {usuario}) => ({
    ...state,
    loading_: false,
    loaded: false,
    user: { ...usuario },
  })),

  on(cargarUsuarioError, (state, {payload}) => ({
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

export function usuarioReducer(state: usuarioState | undefined, action: Action) {
  return _usuarioReducer(state, action);
}
