import { User } from 'src/app/models/usuario.model';
import * as fromUsuario from '../actions';

export interface UsuarioState {
    user: User;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const estadioInicial: UsuarioState = {
    user: null,
    loaded: false,
    loading: false,
    error: null
};

export function usuarioReducer(state = estadioInicial, action: fromUsuario.usuarioActions): UsuarioState {
    switch (action.type) {
        case fromUsuario.CARGAR_USUARIO:
            return {
                ...state,
                loading: true,
                error: null
            };

        case fromUsuario.CARGAR_USUARIO_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                user: {...action.usuario}
            };
        case fromUsuario.CARGAR_USUARIO_FAIL:
            return {
                ...state,
                loaded: false,
                loading: false,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                }
            };
        default:
            return state;
    }
}
