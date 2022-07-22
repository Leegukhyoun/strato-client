import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config/contansts';

const ReserList = ({res}) => {
    const navigator = useNavigate();
    function delRes(){
        axios.delete(`${API_URL}/delres/${res.id}`)
        .then((result)=>{
            alert('예약을 취소했습니다.');
            navigator("/");
        })
        .catch((e)=>{
            console.log(e)
        })
    }

    return (
        <>
        <ul className='reserListWrap'>
            <li>
                <img src={res.imgsrc} alt='' />
            </li>
            <li>
                <ul>
                    <li>예약자명 : <span>{res.name}</span></li>
                    <li>Check In/Out : <span>{res.checkin}</span> ~ <span>{res.checkout}</span></li>
                    <li>Adult : <span>{res.adult}</span>   Kids : <span>{res.kids}</span></li>
                    <li onClick={delRes} className="cancleBtn">예약 취소</li>
                </ul>
            </li>
            <li>
                <p>Room Name : <span>{res.room}</span></p>
                <p>입실/퇴실 : <span>15:00 / 11:00</span></p>
            </li>
        </ul>
        </>
        
    );
};

export default ReserList;