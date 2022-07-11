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

const MainVisual = () => {
    return (
        <div id="mainVisual" className='height'>
            <Carousel effect="fade" autoplay>
                <div>
                <h3 style={contentStyle}>
                    <img src="images/KV1.png"/>
                </h3>
                </div>
                <div>
                <h3 style={contentStyle}>
                    <img src="images/KV2.png"/>
                </h3>
                </div>
                <div>
                <h3 style={contentStyle}>
                    <img src="images/KV3.png"/>
                </h3>
                </div>
                <div>
                <h3 style={contentStyle}>
                    <img src="images/KV_summer_1.png"/>
                </h3>
                </div>
            </Carousel>
        </div>
    );
};

export default MainVisual;