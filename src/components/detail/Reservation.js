import React,{useState, useEffect} from 'react';
import Footer from '../Include/Footer';
import ReserList from './ReserList';

const CheckReservation = ({res}) => {
    const [isOn, setIsOn] = useState(null);
    
    // useEffect(()=>{
    //     setIsOn(true);
    //     if(isOn===true){
    //         const footer = document.querySelector('footer');
    //         footer.style.bottom = -71 + '%';
    //     }
    // },[isOn])
    return (
        <div id="res" className='outer'>
            <div id="res-top">
                <img src='../images/dining_visual_05_2.png' alt=""/>
                <h2>Reservation</h2>
            </div>
            <div id="res-confirm">
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
            {/* <Footer/> */}
        </div>
    );
};

export default CheckReservation;
