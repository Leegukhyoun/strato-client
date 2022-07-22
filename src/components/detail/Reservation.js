import React from 'react';
import ReserList from './ReserList';

const CheckReservation = ({res}) => {

    
    return (
        <div className='res'>
            <div className="res-top">
            <h2>　</h2>
                <img src='../images/dining_visual_05_2.png' alt=""/>
            </div>
            <div className="res-confirm contentInner">
                <h2>예약조회</h2>
                <div id='res-check'>
                <ul id='innerRes' className='titleRes'>
                    <li>
                        이미지
                    </li>
                    <li>
                        상세
                    </li>
                    <li>
                        예약 정보
                    </li>
                </ul>
                    {res.map(res=>
                        <ReserList res={res}/>
                        )}
                </div>
            </div>
        </div>
    );
};

export default CheckReservation;
