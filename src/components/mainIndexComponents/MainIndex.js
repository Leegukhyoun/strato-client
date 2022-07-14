import React from 'react';
import MainVisual from './MainVisual';
import Reservation from './Reservation';
import Facilities from './Facilities';
import Rooms from './Rooms';
import Dining from './Dining';
import Activity from './Activity';

const MainIndex = () => {
    return (
        <>
            <MainVisual/>
            <Reservation/>
            <Facilities/>
            <Rooms/>
            <Dining/>
            <Activity/>
        </>
    );
};

export default MainIndex;