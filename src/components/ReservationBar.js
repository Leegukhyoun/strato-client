import React from 'react';
import {BsFillCalendarFill} from "react-icons/bs"

const ReservationBar = ({selectDate,selectDate2}) => {
    return (
        <>
            <ul>
                <li>ROOM</li>
                <li>
                    <span>CHECK IN / OUT</span>
                    <span><span className='num'>{selectDate}</span> ~ <span className='num'>{selectDate2}<BsFillCalendarFill className='calIcon' /></span></span>
                </li>
                <li>
                    <span>Room <span className='num'>1</span></span>
                    <span>ADULT <span className='num'>2</span></span>
                    <span>CHILDREN <span className='num'>0</span></span>
                </li>
            </ul>
        </>
    );
};

export default ReservationBar;