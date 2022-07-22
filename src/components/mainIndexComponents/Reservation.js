import { Calendar } from 'antd';
import React from 'react';
import ReservationBar from './ReservationBar';
import { useSelector } from 'react-redux';

const Reservation = ({addRoom, onSubmit, onClick, onChangech1, onChangech2, onSetRoom, onSetName, onToggle, onCal}) => {
    
    const Cal = useSelector(state=>state.utils.utils.resCalbox)
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
      };

    return (
            <div id="reservation" className='height'>
                <div id='resBar'>
                    <div id='blackBg'></div>
                    <div id='cal'  style={{display:Cal ? 'block' : 'none'}}>
                        <div className="site-calendar-demo-card">
                        <Calendar fullscreen={false} onPanelChange={onPanelChange} onChange={onChangech1}/>
                        </div>
                    </div>
                    <div id='cal2'  style={{display:Cal ? 'block' : 'none'}}>
                        <div className="site-calendar-demo-card">
                        <Calendar fullscreen={false} onPanelChange={onPanelChange} onChange={onChangech2}/>
                        </div>
                    </div>
                    <ReservationBar addRoom={addRoom} 
                    onSetName={onSetName} 
                    onClick={onClick} 
                    onSetRoom={onSetRoom} 
                    onSubmit={onSubmit} 
                    onToggle={onToggle}
                    onCal={onCal}
                    />
                </div>

            </div>
    );
};

export default Reservation;