import React from 'react';

const ReserList = ({res}) => {
    
    return (
        <ul className='reserListWrap'>
            <li>
                <img src={res.imgsrc} alt='' />
            </li>
            <li>
                <ul>
                    <li>예약자명 : <span>{res.name}</span></li>
                    <li>Check In/Out : <span>{res.checkin}</span> ~ <span>{res.checkout}</span></li>
                    <li>Adult : <span>{res.adult}</span>   Kids : <span>{res.kids}</span></li>
                    <li>예약 취소</li>
                </ul>
            </li>
            <li>
                <p>Room Name : <span>{res.room}</span></p>
                <p>입실/퇴실 : <span>15:00 / 11:00</span></p>
            </li>
        </ul>
    );
};

export default ReserList;