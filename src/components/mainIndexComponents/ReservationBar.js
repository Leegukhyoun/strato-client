import React, {useState} from 'react';
import {BsFillCalendarFill} from "react-icons/bs"
import {AiFillPlusSquare} from "react-icons/ai"
import {AiFillMinusSquare} from "react-icons/ai"
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const ResPopup = styled.div`
position: absolute;
top:50%;
left:50%;
transform:translate(-50%, -50%);
background-color: #fff;
display:none;
width:500px;
height:400px;
z-index : 21;
${props =>
        props.isOn &&
        css`
    display : block;
`
    }
`
const BlackBg = styled.div`
position: absolute;
top:0;
left:0;
background-color: rgba(0,0,0,0.7);
display:none;
width:100vw;
height:100vh;
transition: 0.5s;
z-index : 21;
${props =>
        props.isOn &&
        css`
    display : block;
`
    }
`




const ReservationBar = ({CalOn, onClick, addRoom, onSetRoom, onSubmit, onToggle, onCal}) => {
    const loginCheck = useSelector(state=>state.utils.utils);

    const eventRemove = (e)=>{
        e.preventDefault();
    }

    return (
        <>
        <form onSubmit={eventRemove}>
            <ul>
                <li>
                    <select name="room" id="rooms" onChange={onSetRoom} className='Azonix'>
                        <option value="STANDARD" className='option Azonix'>STANDARD Room</option>
                        <option value="SUPERIOR" className='option Azonix'>SUPERIOR Room</option>
                        <option value="DELUXE" className='option Azonix'>DELUXE Room</option>
                        <option value="SUITE" className='option Azonix'>SUITE Room</    option>
                    </select>
                </li>
                <li>
                    <span>CHECK IN / OUT</span>
                    <span><span className='num'>{addRoom.checkin}</span> - <span className='num'>{addRoom.checkout}<BsFillCalendarFill className='calIcon'  onClick={()=>onCal(!loginCheck.resCalbox)}/></span></span>
                </li>
                <li>
                    <span id='RoomNum'><span className='num Azonix'>{addRoom.room}</span></span>
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
                <button id='searchBtn' type='submit' onClick={onSubmit}>Reservation</button>
            </div>
            <BlackBg isOn={loginCheck.resMsgbox} onClick={onToggle}/>
            <ResPopup isOn={loginCheck.resMsgbox}>
                <div className="resPopup">
                    <div>
                        <h2>룸 예약이 완료되었습니다.</h2>
                    </div>
                    <div>
                        <button type='button' onClick={onToggle}>닫기</button>
                        <Link to="/rescheck"><button onClick={onToggle}>예약 확인</button></Link>
                    </div>
                </div>
            </ResPopup>
        </form>
        </>
    );
};

export default ReservationBar;