import React from 'react';
import MainVisual from './MainVisual';
import Facilities from './Facilities';
import Rooms from './Rooms';
import Dining from './Dining';
import Activity from './Activity';
import Empty from './Empty';
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
            <Empty />
        </>
    );
};

export default MainIndex;