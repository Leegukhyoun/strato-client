import React, { useState } from 'react';
import "antd/dist/antd.css";
import MainVisual from './MainVisual';
import Reservation from './Reservation';
import Facilities from './Facilities';
import Rooms from './Rooms';
import Dining from './Dining';
import Activity from './Activity';





const Index = () => {



    return (
        <>
        <section>
            <MainVisual/>
            <Reservation/>
            <Facilities/>
            <Rooms/>
            <Dining/>
            <Activity/>
        </section>
        </>
    );
};

export default Index;