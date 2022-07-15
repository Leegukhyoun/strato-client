import { Calendar } from 'antd';
import React, { useState } from 'react';

import ReservationBar from './ReservationBar';

const Reservation = () => {

    const [ selectDate, SetSelectDate ] = useState("체크인");
    const [ selectDate2, SetSelectDate2 ] = useState("체크아웃");
    const [ CalState, SetCalState ] = useState(false);
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
      };
      const onChange = (value) => {
        SetSelectDate(value.format('YYYY-MM-DD'));
        console.log(selectDate);
      }
      const onChange2 = (value) => {
        SetSelectDate2(value.format('YYYY-MM-DD'));
        console.log(selectDate2);
      }
      const CalOn = () => {
        SetCalState(!CalState);
      }
    return (
            <div id="reservation" className='height'>
                <div id='resBar'>
                    <div id='blackBg'></div>
                    <div id='cal'  style={{display:CalState ? 'block' : 'none'}}>
                        <div className="site-calendar-demo-card">
                        <Calendar fullscreen={false} onPanelChange={onPanelChange} onChange={onChange}/>
                        </div>
                    </div>
                    <div id='cal2'  style={{display:CalState ? 'block' : 'none'}}>
                        <div className="site-calendar-demo-card">
                        <Calendar fullscreen={false} onPanelChange={onPanelChange} onChange={onChange2}/>
                        </div>
                    </div>
                    <ReservationBar selectDate={selectDate} selectDate2={selectDate2} CalOn={CalOn}/>
                    <ReservationBar selectDate={selectDate} selectDate2={selectDate2}  CalOn={CalOn}/>
                </div>

            </div>
    );
};

export default Reservation;