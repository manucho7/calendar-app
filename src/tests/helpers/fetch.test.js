import '@testing-library/dom';
import '@testing-library/jest-dom';
import { fetchSinToken } from '../../helpers/fetch';


describe('Pruebas en helpers/fetch.js', () => {

    test('fetch sin token debe de funcionar ', async() => {
        
        const resp = await fetchSinToken('auth', { email: 'manuel@gmail.com', password: '123456'}, 'POST');
        expect( resp instanceof Response ).toBe( true );

        const body = await resp.json();
        expect( body.ok ).toBe( true );
    });
    

})
