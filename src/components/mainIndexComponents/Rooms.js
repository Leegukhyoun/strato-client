import React from 'react';
import { Carousel } from 'antd';
import "antd/dist/antd.css";

const contentStyle = {
    height: '100vh',
    lineHeight: '100vh',
    background: '#364d79',
};

const Rooms = () => {
    return (
        <div id="rooms" className='height'>
            <Carousel effect="fade" dots={false} autoplay>
                <div>
                    <h3 style={contentStyle}>
                        <img src="images/rooms/rooms_visual_1.png" alt="호텔_방_사진1" />
                    </h3>
                    <div className="roomText">
                        <h2 className='Azonix'>STANDARD</h2>
                        <span>Our basic room for every one</span>
                    </div>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img src="images/rooms/rooms_visual_2.png" alt="호텔_방_사진1" />
                    </h3>
                    <div className="roomText">
                        <h2 className='Azonix'>SUPERIOR</h2>
                        <span>Best choice for you</span>
                    </div>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img src="images/rooms/rooms_visual_3.png" alt="호텔_방_사진1" />
                    </h3>
                    <div className="roomText">
                        <h2 className='Azonix'>DELUXE</h2>
                        <span>Elegant, Marvelous, Deluxe</span>
                    </div>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img src="images/rooms/rooms_visual_4.png" alt="호텔_방_사진1" />
                    </h3>
                    <div className="roomText">
                        <h2 className='Azonix'>SUITE</h2>
                        <span>No regret Indeed</span>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Rooms;