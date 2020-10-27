

//acciones para eventos

import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";

export const eventStartAddNew = (event) => {
    return async( dispatch, getState ) => {

        const { uid, name } = getState().auth;

        try {

            const respuesta = await fetchConToken('events', event, 'POST')
            const body = await respuesta.json();
            
            if ( body.ok ) {
                event.id = body.evento.id;
                event.user = {
                    _id: uid,
                    name: name
                }
                dispatch( eventAddNew( event ) )
            }

        } catch (error) {
            console.log(error);
        }
    }
}

const eventAddNew = ( event ) => ({
    type: types.eventAddNew,
    payload: event
});


export const eventSetActive = ( event ) => ({
    type: types.eventSetActive,
    payload: event
});

export const eventClearActiveEvent = () => ({ type: types.eventClearActiveEvent });

export const eventUpdated = ( event ) => ({
    type: types.eventUpdated,
    payload: event
});

export const eventDeleted = () => ({ type: types.eventDeleted });

export const eventStartLoading = () => {
    return async( dispatch ) => {

        try {
            
            const resp = await fetchConToken( 'events' );
            const body = await resp.json();
            const events = body.eventos;
            console.log( events );

            // dispatch( eventLoaded( events ) )

        } catch (error) {
            console.log( error );
        }

    }
}

const eventLoaded = (events) => ({
    type: types.eventLoader,
    payload: events
})