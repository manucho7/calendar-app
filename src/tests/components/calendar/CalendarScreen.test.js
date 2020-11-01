import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { CalendarScreen } from '../../../components/calendar/CalendarScreen';

import '@testing-library/jest-dom';
import '@testing-library/dom';

// jest.mock('../../../actions/events', () =>({
//     eventStartDelete: jest.fn()
// }))

const middlewares = [thunk];
const mockStore = configureStore( middlewares );

const initState = {
    calendar: {
        events: []
    },
    auth: {
        uid: '123',
        name: 'Manuel'
    },
    ui: {
        openModal: false
    }
};
const store = mockStore( initState );

store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <CalendarScreen />
    </Provider>
)

describe('Pruebas en CalendarScreen', () => {
    
    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        
    });

    test('pruebas con las interacciones del calendario', () => {
        
    });
    
    

})
