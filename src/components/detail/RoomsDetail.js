import React from 'react';


const RoomsDetail = () => {
    return (
        <>
            <div className='roomDetailWrap'>
                <div className='roomDetailHeader'>
                    <div className='roomImg'>
                        <div className="roomText">
                            <h2>STANDARD</h2>
                            <span>Our basic room for every one</span>
                        </div>
                    </div>
                </div>
                <div className='roomDetailBody'>
                    <ul>
                        <li className='standard'>
                            <div>
                                <img src='images/Rooms/rooms_visual_1.png' alt='스탠다드방' />
                            </div>
                            <div className='roomExplain'>
                                <h2>STANDARD</h2>
                                <ul>
                                    <li>
                                        <h3>가격</h3>
                                        <span>180,000₩ (1박 기준)</span>
                                    </li>
                                    <li>
                                        <h3>수용인원</h3>
                                        <span>2 ~ 4인</span>
                                    </li>
                                    <li>
                                        <h3>방 구조</h3>
                                        <span>거실 1, 침실 1, 욕실 1</span>
                                    </li>
                                    <li>
                                        <h3>침대</h3>
                                        <div className='roomBedType'>
                                            <span>더블 1, 싱글 1</span>
                                        </div>
                                    </li>
                                    <li>
                                        <h3>체크인 / 체크아웃</h3>
                                        <span>15:00 / 11:00</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='superior'>
                            <div className='roomExplain'>
                                <h2>SUPERIOR</h2>
                                <ul>
                                    <li>
                                        <h3>가격</h3>
                                        <span>220,000₩ (1박 기준)</span>
                                    </li>
                                    <li>
                                        <h3>수용인원</h3>
                                        <span>2 ~ 5인</span>
                                    </li>
                                    <li>
                                        <h3>방 구조</h3>
                                        <span>거실 1, 침실 2, 욕실 1</span>
                                    </li>
                                    <li>
                                        <h3>침대</h3>
                                        <div className='roomBedType'>
                                            <span>MAIN BEDROOM</span><span>퀸 1</span>
                                            <span>SUB BEDROOM1</span><span>더블 1</span>
                                        </div>
                                    </li>
                                    <li>
                                        <h3>체크인 / 체크아웃</h3>
                                        <span>15:00 / 11:00</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <img src='images/Rooms/rooms_visual_2.png' alt='스탠다드방' />
                            </div>
                        </li>
                        <li className='deluxe'>
                            <div>
                                <img src='images/Rooms/rooms_visual_3.png' alt='스탠다드방' />
                            </div>
                            <div className='roomExplain'>
                                <h2>DELUXE</h2>
                                <ul>
                                    <li>
                                        <h3>가격</h3>
                                        <span>270,000₩ (1박 기준)</span>
                                    </li>
                                    <li>
                                        <h3>수용인원</h3>
                                        <span>3 ~ 6인</span>
                                    </li>
                                    <li>
                                        <h3>방 구조</h3>
                                        <span>거실 1, 침실 2, 욕실 2</span>
                                    </li>
                                    <li>
                                        <h3>침대</h3>
                                        <div className='roomBedType'>
                                            <span>MAIN BEDROOM</span><span>퀸 1</span>
                                            <span>SUB BEDROOM1</span><span>더블 1, 싱글 1</span>
                                        </div>
                                    </li>
                                    <li>
                                        <h3>체크인 / 체크아웃</h3>
                                        <span>15:00 / 11:00</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='suite'>
                            <div className='roomExplain'>
                                <h2>SUITE</h2>
                                <ul>
                                    <li>
                                        <h3>가격</h3>
                                        <span>350,000₩ (1박 기준)</span>
                                    </li>
                                    <li>
                                        <h3>수용인원</h3>
                                        <span>4 ~ 8인</span>
                                    </li>
                                    <li>
                                        <h3>방 구조</h3>
                                        <span>거실 1, 침실 3, 욕실 2</span>
                                    </li>
                                    <li>
                                        <h3>침대</h3>
                                        <div className='roomBedType'>
                                            <span>MAIN BEDROOM</span><span>킹 1</span>
                                            <span>SUB BEDROOM1</span><span>더블 1, 싱글 1</span>
                                            <span>SUB BEDROOM2</span><span>트윈 1</span>
                                        </div>
                                    </li>
                                    <li>
                                        <h3>체크인 / 체크아웃</h3>
                                        <span>15:00 / 11:00</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <img src='images/Rooms/rooms_visual_4.png' alt='스탠다드방' />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default RoomsDetail;