import React, {useState} from 'react';
import {BsFillCalendarFill} from "react-icons/bs"
import {AiFillPlusSquare} from "react-icons/ai"
import {AiFillMinusSquare} from "react-icons/ai"

const ReservationBar = ({selectDate,selectDate2, CalOn}) => {
    const [ Select, SetSelect ] = useState("Strato");
    const [ adultNum, SetAdultNum ] = useState(0);
    const [ KidsNum, SetKidsNum ] = useState(0);

    const onChange = (e) => {
        SetSelect(e.target.value);
    }

    const onAdultPlus = () => {
        SetAdultNum(adultNum + 1);
    }
    const onAdultMinus = () => {
        if(adultNum > 0){
            SetAdultNum(adultNum - 1);
        }
    }
    const onKidsPlus = () => {
        SetKidsNum(KidsNum + 1);
    }
    const onKidsMinus = () => {
        if(KidsNum > 0){
            SetKidsNum(KidsNum - 1);
        }
    }
    return (
        <>
            <ul>
                <li>
                <select name="rooms" id="rooms" value={Select} onChange={onChange}>
                    <option value="Strato" className='option'>Strato Room</option>
                    <option value="Sweet" className='option'>Sweet Room</option>
                    <option value="Busyness" className='option'>Busyness Room</option>
                </select>
                </li>
                <li>
                    <span>CHECK IN / OUT</span>
                    <span><span className='num'>{selectDate}</span> - <span className='num'>{selectDate2}<BsFillCalendarFill className='calIcon'  onClick={CalOn}/></span></span>
                </li>
                <li>
                <span id='RoomNum'><span className='num'>{Select}</span></span>
                    <span>ADULT　 <span className='num'>{adultNum}</span><AiFillPlusSquare className='arrow' onClick={onAdultPlus}/><AiFillMinusSquare className='arrow' onClick={onAdultMinus}/></span>
                    <span>KIDS　　 <span className='num'>{KidsNum}</span><AiFillPlusSquare className='arrow' onClick={onKidsPlus}/><AiFillMinusSquare className='arrow' onClick={onKidsMinus}/></span>
                </li>
            </ul>
            <div>
                <button id='searchBtn'>Reservation</button>
            </div>
        </>
    );
};

export default ReservationBar;