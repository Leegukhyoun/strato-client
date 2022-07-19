import React from 'react';

const ReserList = () => {
    
    return (
        <ul className='reserListWrap'>
            <li>
                <img src='images/rooms/rooms_visual_1.png' alt='' />
            </li>
            <li>
                <ul>
                    <li>예약자명 : <span>{sessionStorage.getItem('name')}</span></li>
                    <li>Check In/Out : <span>2022/07/19</span> ~ <span>2022/07/20</span></li>
                    <li>Adult : <span>20</span>   Kids : <span>30</span></li>
                    <li>예약 취소</li>
                </ul>
            </li>
            <li>
                <p>예약 번호 : <span>12345678910</span></p>
                <p>입실/퇴실 : <span>15:00 / 11:00</span></p>
            </li>
        </ul>
    );
};

export default ReserList;