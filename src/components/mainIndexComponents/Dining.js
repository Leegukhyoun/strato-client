import React, { useState } from 'react';

const Dining = () => {
    const [isOn, setIsOn] = useState(true);
    const onMouseEnter = () => {
        setIsOn(true);
    }
    const onMouseLeave = () => {
        setIsOn(true)
    }
    const otherLiEnter = () => {
        setIsOn(false)
    }
    return (
        <div id="dining" className='height'>
            <ul>
                <li onMouseEnter={onMouseEnter} className={isOn ? "diningLi mainLi" : "diningLi"}>
                    <div className='diningText'>
                        <div className='mainDiningText'>
                            <h3 className='Azonix'>STRATO</h3>
                            <p>성층권을 누비며 새로운 세상을 알아가는 당신에게</p>
                            <p>초고층 스카이뷰 레스토랑</p>
                            <p>OPEN / CLOSE : <span>08:00 ~ 21: 00</span></p>
                            <p>last order : <span>20:30</span></p>
                        </div>
                    </div>
                    <img src="images/dining/dining_1.png" alt='다이닝룸사진1' />
                </li>
                <li className="diningLi" onMouseLeave={onMouseLeave} onMouseEnter={otherLiEnter}>
                    <div className='diningText'>
                        <div className='mainDiningText'>
                            <h3 className='Azonix'>PASSION</h3>
                            <p>뜨거운 태양과 같이</p>
                            <p>오픈키친에서 선사하는 예술같은 요리</p>
                            <p>OPEN / CLOSE : <span>11:00 ~ 22: 00</span></p>
                            <p>last order : <span>21:30</span></p>
                        </div>
                    </div>
                    <img src="images/dining/dining_4.png" alt='다이닝룸사진2' />
                </li>
                <li className="diningLi" onMouseLeave={onMouseLeave} onMouseEnter={otherLiEnter}>
                    <div className='diningText'>
                        <div className='mainDiningText'>
                            <h3 className='Azonix'>ABYSS</h3>
                            <p>심해에서만 찾을 수 있는 고요함</p>
                            <p>국내 최고 바텐더가 선보이는 주류의 향연</p>
                            <p>OPEN / CLOSE : <span>19:00 ~ 02: 00</span></p>
                            <p>예약 손님만 받습니다.</p>
                        </div>
                    </div>
                    <img src="images/dining/dining_5.png" alt='다이닝룸사진3' />
                </li>
            </ul>
        </div>
    );
};

export default Dining;