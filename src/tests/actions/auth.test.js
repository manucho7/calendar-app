import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Swal from 'sweetalert2';
import { startLogin } from '../../actions/auth';
import { types } from '../../types/types';
import '@testing-library/dom';
import '@testing-library/jest-dom';

jest.mock('sweetalert2', () => ({
    fire: jest.fn()
}))

const middlewares = [thunk];
const mockStore = configureStore( middlewares );

const initState = {};
let store = mockStore( initState );

Storage.prototype.setItem = jest.fn();

describe('Pruebas en las acciones de actions/auth', () => {

    beforeEach( () => {
        store = mockStore( initState );
        jest.clearAllMocks();
    });
    
    test('startLogin correcto', async() => {
       
        await store.dispatch( startLogin('manuel@gmail.com', '123456') );
        const actions = store.getActions();
        
        expect( actions[0] ).toEqual({
            type: types.authLogin,
            payload: {
                uid: expect.any( String ),
                name: expect.any( String )
            }
        });

        expect(localStorage.setItem).toHaveBeenCalledWith('token', expect.any(String));
        expect(localStorage.setItem).toHaveBeenCalledWith('token-init-date', expect.any(Number) );

    });
    
    test('startLogin incorrecto', async() => {
        
        await store.dispatch( startLogin('manuel@gmail.com', '12345678') );
        let actions = store.getActions();

        expect( actions ).toEqual([]);
        expect( Swal.fire ).toHaveBeenCalledWith('Error', 'Password incorrecto', 'error');
    
        await store.dispatch( startLogin('manuel@gmail1.com', '123456') );
        
        actions = store.getActions();
        expect( Swal.fire ).toHaveBeenCalledWith("Error", "No existe usuario con ese email", "error");

    })
    
})
