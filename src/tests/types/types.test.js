import '@testing-library/dom';
import '@testing-library/jest-dom';
import { types } from '../../types/types';

describe('Pruebas en types', () => {
    
    test('Los types deben de ser iguales', () => {
        
        expect( types ).toEqual({
            uiOpenModal: '[ui] Open Modal',
            uiCloseModal: '[ui] Close Modal',
            
            eventSetActive: '[event] Set Active',
            eventStartAddNew: '[event] Start add new',
            eventAddNew: '[event] Add new',
            eventClearActiveEvent: '[event] Clear active event',
            eventUpdated: '[event] Event updated',
            eventDeleted: '[event] Event deleted',
            eventLoaded: '[event] Events Loaded',
            eventLogout: '[event] Logout event',

            authChecking: '[auth] Checking login state',
            authCheckingFinished: '[auth] Finished checking state',
            authStartLogin: '[auth] Start login',
            authLogin: '[auth] Login',
            authStartRegister: '[auth] Start register',
            authStartTokenRenew: '[auth] Start token renew',
            authLogout: '[auth] Logout'
        });
    });
    

})
