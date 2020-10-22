import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startLogin = async(email, password) => {
    return async( dispatch ) => {

        const respuesta = await fetchSinToken( 'auth', { email, password }, 'POST' );
        const body = await respuesta.json();

        if ( body.ok ) {
            localStorage.setItem( 'token', body.token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );
            
            dispatch( login({
                uid: body.uid,
                name: body.name
            }) )
        
        }

    }


}

const login = ( user ) => ({
    type: types.authStartLogin,
    payload: user
})