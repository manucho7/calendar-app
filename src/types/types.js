//Objeto que tiene centralizo todos los tipos
//de acciones y asi saber que string para cada 
//accion


export const types = {
    uiOpenModal: '[ui] Open Modal',
    uiCloseModal: '[ui] Close Modal',
    
    eventSetActive: '[event] Set Active',
    eventStartAddNew: '[event] Start add new',
    eventAddNew: '[event] Add new',
    eventClearActiveEvent: '[event] Clear active event',
    eventUpdated: '[event] Event updated',
    eventDeleted: '[event] Event deleted',
    eventLoader: '[event] Events Loaded',

    authChecking: '[auth] Checking login state',
    authCheckingFinished: '[auth] Finished checking state',
    authStartLogin: '[auth] Start login',
    authLogin: '[auth] Login',
    authStartRegister: '[auth] Start register',
    authStartTokenRenew: '[auth] Start token renew',
    authLogout: '[auth] Logout'

}