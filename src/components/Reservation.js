import { Calendar } from 'antd';
import React, { useState } from 'react';

import ReservationBar from './ReservationBar';

const Reservation = () => {

    const [ selectDate, SetSelectDate ] = useState("체크인");
    const [ selectDate2, SetSelectDate2 ] = useState("체크아웃");
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
    return (
            <div id="reservation" className='height'>
                <div id='resBar'>
                    <div id='cal'>
                        <div className="site-calendar-demo-card">
                        <Calendar fullscreen={false} onPanelChange={onPanelChange} onChange={onChange}/>
                        </div>
                    </div>
                    <div id='cal2'>
                        <div className="site-calendar-demo-card">
                        <Calendar fullscreen={false} onPanelChange={onPanelChange} onChange={onChange2}/>
                        </div>
                    </div>
                    <ReservationBar selectDate={selectDate} selectDate2={selectDate2} />
                </div>
            </div>
    );
};

export default Reservation;