import React from 'react';

const Reservation = () => {
    return (
            <div id="reservation" className='height'>
                <div id='resBar'>
                    <ul>
                        <li>ROOM</li>
                        <li>
                            <span>CHECK IN / OUT</span>
                            <span><span className='num'>2022-07-08</span> ~ <span className='num'>2022-07-08</span></span>
                        </li>
                        <li>
                            <span>Room <span className='num'>1</span></span>
                            <span>ADULT <span className='num'>2</span></span>
                            <span>CHILDREN <span className='num'>0</span></span>
                        </li>
                    </ul>
                </div>
            </div>
    );
};

export default Reservation;