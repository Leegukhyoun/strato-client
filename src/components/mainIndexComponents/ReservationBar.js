import React, {useState} from 'react';
import {BsFillCalendarFill} from "react-icons/bs"
import {AiFillPlusSquare} from "react-icons/ai"
import {AiFillMinusSquare} from "react-icons/ai"



const ReservationBar = ({CalOn, onClick, addRoom, onSetRoom, onSubmit, onSetName}) => {

    return (
        <>
        <form onSubmit={onSubmit}>
            <ul>
                <li>
                    <select name="room" id="rooms" onChange={onSetRoom}>
                        <option value="STANDARD" className='option'>STANDARD Room</option>
                        <option value="SUPERIOR" className='option'>SUPERIOR Room</option>
                        <option value="DELUXE" className='option'>DELUXE Room</option>
                        <option value="SUITE" className='option'>SUITE Room</option>
                    </select>
                </li>
                <li>
                    <span>CHECK IN / OUT</span>
                    <span><span className='num'>{addRoom.checkin}</span> - <span className='num'>{addRoom.checkout}<BsFillCalendarFill className='calIcon'  onClick={CalOn}/></span></span>
                </li>
                <li>
                    <span id='RoomNum'><span className='num'>{addRoom.room}</span></span>
                    <span>
                        ADULT　 
                            <span className='num'>{addRoom.adult}</span>
                            <AiFillPlusSquare className='arrow' onClick={()=>onClick("SET_ADULT_ADD")}/>
                            <AiFillMinusSquare className='arrow' onClick={()=>onClick("SET_ADULT_PREV")}/>
                    </span>
                    <span>
                        KIDS　　 
                            <span className='num'>{addRoom.kids}</span>
                            <AiFillPlusSquare className='arrow' onClick={()=>onClick("SET_KIDS_ADD")}/>
                            <AiFillMinusSquare className='arrow' onClick={()=>onClick("SET_KIDS_PREV")}/>
                    </span>
                </li>
            </ul>
            <div>
                <button id='searchBtn' type='submit'>Reservation</button>
            </div>
        </form>
        </>
    );
};

export default ReservationBar;