import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { uiOpenModal } from '../../actions/ui';
import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { eventSetActive } from '../../actions/events';
import { AddNewFab } from '../ui/addNewFab';

import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('es');

const localizer = momentLocalizer(moment);


export const CalendarScreen = ( event, start, end, isSelected ) => {
    
    const dispatch = useDispatch();
    
    const { events } = useSelector( state => state.calendar );
    
    const [lastView, setLastView] = useState( localStorage.getItem( 'lastView' ) || 'month' );

    const onDoubleClick = (e) => {
        dispatch( uiOpenModal() );
    }

    const onSelectEvent = (e) => {
        dispatch( eventSetActive( e ) );
    }

    const onViweChange = (e) => {
        setLastView(e);
        localStorage.setItem( 'lastView', e );
    }


    const eventStyleGetter = () => {

        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }

        return {
            style
        }
    }

    return (
        <div className="calendar-screen">
            <Navbar />
            
            <Calendar
                localizer={ localizer }
                events={ events }
                startAccessor="start"
                endAccessor='end'
                messages={ messages }
                eventPropGetter={ eventStyleGetter }
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelectEvent }
                onView={ onViweChange }
                view={ lastView }
                components={{
                    event: CalendarEvent
                }}
            />

            <AddNewFab />

            <CalendarModal />
        </div>
    )
}
