import React from 'react';
import MainVisual from './MainVisual';
import Facilities from './Facilities';
import Rooms from './Rooms';
import Dining from './Dining';
import Activity from './Activity';
import ReservationContainer from '../Container/ReservationContainer';

const MainIndex = () => {
    return (
        <>
            <MainVisual/>
            <ReservationContainer/>
            <Facilities/>
            <Rooms/>
            <Dining/>
            <Activity/>
        </>
    );
};

export default MainIndex;