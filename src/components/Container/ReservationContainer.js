import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInput, setSubmit, setNumber, setCinState, setCoutState, setRoom, setName, resReset } from '../../module/reservation';
import Reservation from '../mainIndexComponents/Reservation';
import { toggleMsg, toggleCal } from '../../module/pageutils';

const ReservationContainer = () => {

    const addRoom = useSelector(state=>state.res.addRoom);
    const dispatch = useDispatch();


    const onClick = (people) => {
        dispatch(setNumber(people))
        console.log(addRoom.adult)
    }
    const onChange = (e) => {
        dispatch(setInput(e));
    }

    const onChangech1 = (date) => {
        dispatch(setCinState(date));
    }
    const onChangech2 = (date) => {
        dispatch(setCoutState(date));
    }
    const onSetRoom = (e) => {
        dispatch(setRoom(e));
    }
    const onSetName = (sessionId) => {
        dispatch(setName(sessionId));
    }
    const onToggle = () => {
        dispatch(toggleMsg());
    }
    const onCal = (Cal) => {
        dispatch(toggleCal(Cal));
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(!sessionStorage.getItem('name')){
            alert('로그인을 하고 예약을 해주세요.');
            return null;
        }
        onSetName(sessionStorage.getItem('name'));
        onToggle();
        onCal(false);
        dispatch(setSubmit());
        dispatch(resReset())
    }

    return (
        <Reservation addRoom={addRoom} 
        onSetName={onSetName} 
        onSetRoom={onSetRoom} 
        onChange={onChange} 
        onSubmit={onSubmit} 
        onClick={onClick} 
        onChangech1={onChangech1} 
        onChangech2={onChangech2} 
        onToggle={onToggle}
        onCal={onCal}
        />
    );
};

export default ReservationContainer;