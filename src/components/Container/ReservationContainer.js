import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInput, setSubmit, setNumber, setCinState, setCoutState, setRoom, setName } from '../../module/reservation';
import Reservation from '../mainIndexComponents/Reservation';

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
    const onSubmit = (e) => {
        e.preventDefault();
        onSetName(sessionStorage.getItem('name'));
        dispatch(setSubmit());
    }
    return (
        <Reservation addRoom={addRoom} onSetName={onSetName} onSetRoom={onSetRoom} onChange={onChange} onSubmit={onSubmit} onClick={onClick} onChangech1={onChangech1} onChangech2={onChangech2}/>
    );
};

export default ReservationContainer;