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
                <div className='roomText'></div>
                <Carousel effect="fade" dots={false} autoplay>
                    <div>
                    <h3 style={contentStyle}>
                    </h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}></h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}></h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}></h3>
                    </div>
                </Carousel>
            </div>
    );
};

export default Rooms;