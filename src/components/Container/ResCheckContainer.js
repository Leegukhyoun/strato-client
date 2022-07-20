import React, {useEffect} from 'react';
import CheckReservation from '../detail/Reservation';
import { useDispatch, useSelector } from 'react-redux';
import { searchRes } from '../../module/reservation';

const ResCheckContainer = () => {
    const { data, loading, error } = useSelector(state=>state.res.res);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(searchRes());
    },[dispatch])
    if(loading) return <div>로딩중.</div>
    if(error) return <div>에러 발생</div>
    if(!data) return null;
    return (
        <CheckReservation res={data}/>
    );
};

export default ResCheckContainer;