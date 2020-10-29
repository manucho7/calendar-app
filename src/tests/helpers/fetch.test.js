import '@testing-library/dom';
import '@testing-library/jest-dom';
import { fetchConToken, fetchSinToken } from '../../helpers/fetch';


describe('Pruebas en helpers/fetch.js', () => {

    let token = '';

    test('fetch sin token debe de funcionar ', async() => {
        
        const resp = await fetchSinToken('auth', { email: 'manuel@gmail.com', password: '123456'}, 'POST');
        expect( resp instanceof Response ).toBe( true );

        const body = await resp.json();
        expect( body.ok ).toBe( true );

        token = body.token;
    });
    
    test('fetch con token debe de funcionar ', async() => {
        
        localStorage.setItem('token', token);

        const resp = await fetchConToken( 'events/5f8c382524827f31fcdb1eb5', {}, 'DELETE' );
        const body = await resp.json();
        
        expect( body.msg ).toBe('No existe evento por ese id');
    });

})
