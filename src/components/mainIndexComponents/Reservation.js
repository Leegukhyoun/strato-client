import { Calendar } from 'antd';
import React, { useState } from 'react';

import ReservationBar from './ReservationBar';

const Reservation = ({addRoom, onSubmit, onClick, onChangech1, onChangech2, onSetRoom, onSetName}) => {
    const [ CalState, SetCalState ] = useState(false);
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
      };
      const CalOn = () => {
        SetCalState(!CalState);
      }

    return (
            <div id="reservation" className='height'>
                <div id='resBar'>
                    <div id='blackBg'></div>
                    <div id='cal'  style={{display:CalState ? 'block' : 'none'}}>
                        <div className="site-calendar-demo-card">
                        <Calendar fullscreen={false} onPanelChange={onPanelChange} onChange={onChangech1}/>
                        {/* <input type="hidden" name='cal1' value={addRoom.checkin}/> */}
                        </div>
                    </div>
                    <div id='cal2'  style={{display:CalState ? 'block' : 'none'}}>
                        <div className="site-calendar-demo-card">
                        <Calendar fullscreen={false} onPanelChange={onPanelChange} onChange={onChangech2}/>
                        </div>
                    </div>
                    <ReservationBar addRoom={addRoom} onSetName={onSetName} CalOn={CalOn} onClick={onClick} onSetRoom={onSetRoom} onSubmit={onSubmit}/>
                </div>

            </div>
    );
};

export default Reservation;