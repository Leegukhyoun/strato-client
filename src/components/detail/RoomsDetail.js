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
                                <h3>SUPERIOR</h3>
                                <ul>
                                    <li>
                                        <p>가격</p>
                                        <span>220,000₩ (1박 기준)</span>
                                    </li>
                                    <li>
                                        <p>수용인원</p>
                                        <span>2 ~ 5인</span>
                                    </li>
                                    <li>
                                        <p>방 구조</p>
                                        <span>거실 1, 침실 1, 욕실 1</span>
                                    </li>
                                    <li>
                                        <p>침대</p>
                                        <span>더블 1, 싱글 1</span>
                                    </li>
                                    <li>
                                        <p>체크인 / 체크아웃</p>
                                        <span>15:00 / 11:00</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='superior'>
                            <div className='roomExplain'>
                                <h3>SUPERIOR</h3>
                                <ul>
                                    <li>
                                        <p>가격</p>
                                        <span>220,000₩ (1박 기준)</span>
                                    </li>
                                    <li>
                                        <p>수용인원</p>
                                        <span>2 ~ 5인</span>
                                    </li>
                                    <li>
                                        <p>방 구조</p>
                                        <span>거실 1, 침실 1, 욕실 1</span>
                                    </li>
                                    <li>
                                        <p>침대</p>
                                        <span>더블 1, 싱글 1</span>
                                    </li>
                                    <li>
                                        <p>체크인 / 체크아웃</p>
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
                                <h3>SUPERIOR</h3>
                                <ul>
                                    <li>
                                        <p>가격</p>
                                        <span>220,000₩ (1박 기준)</span>
                                    </li>
                                    <li>
                                        <p>수용인원</p>
                                        <span>2 ~ 5인</span>
                                    </li>
                                    <li>
                                        <p>방 구조</p>
                                        <span>거실 1, 침실 1, 욕실 1</span>
                                    </li>
                                    <li>
                                        <p>침대</p>
                                        <span>더블 1, 싱글 1</span>
                                    </li>
                                    <li>
                                        <p>체크인 / 체크아웃</p>
                                        <span>15:00 / 11:00</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='suite'>
                            <div className='roomExplain'>
                                <h3>SUPERIOR</h3>
                                <ul>
                                    <li>
                                        <p>가격</p>
                                        <span>220,000₩ (1박 기준)</span>
                                    </li>
                                    <li>
                                        <p>수용인원</p>
                                        <span>2 ~ 5인</span>
                                    </li>
                                    <li>
                                        <p>방 구조</p>
                                        <span>거실 1, 침실 1, 욕실 1</span>
                                    </li>
                                    <li>
                                        <p>침대</p>
                                        <span>더블 1, 싱글 1</span>
                                    </li>
                                    <li>
                                        <p>체크인 / 체크아웃</p>
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