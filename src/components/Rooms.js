import React from 'react';
import { Carousel } from 'antd';
import "antd/dist/antd.css";

const contentStyle = {
    height: '100vh',
    color: '#fff',
    lineHeight: '100vh',
    textAlign: 'center',
    background: '#364d79',
  };

const Rooms = () => {
    return (
            <div id="rooms" className='height'>
                <div className='roomText'></div>
                <Carousel effect="fade"  dotPosition={'right'} autoplay>
                    <div>
                    <h3 style={contentStyle}>
                    </h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
            </div>
    );
};

export default Rooms;