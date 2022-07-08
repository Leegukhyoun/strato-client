import { Carousel, Radio } from 'antd';
import React, { useState } from 'react';
import "antd/dist/antd.css";

const contentStyle = {
    height: '100vh',
    color: '#fff',
    lineHeight: '100vh',
    textAlign: 'center',
    background: '#364d79',
  };
  
const Index = () => {
    const [dotPosition, setDotPosition] = useState('top');

  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };

    return (
        <>
        <header>
            <h1></h1>
            <ul>
                <li>EN</li>
                <li>Reservation</li>
                <li>Login</li>
                <li><span></span><span></span><span></span></li>
            </ul>
        </header>
        <section>
            <div id="mainVisual">
            <Carousel effect="fade" autoplay>
                <div>
                <h3 style={contentStyle}>1</h3>
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
            <div id="reservation">
                <div id='resBar'>
                    <ul>
                        <li></li>
                        <li>
                            <span>CHECK IN / OUT</span>
                            <span>2022-07-08 ~ 2022-07-08</span>
                        </li>
                        <li>
                            <span>Room1</span>
                            <span>ADULT2</span>
                            <span>CHILDREN</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="facilities">
                <div>
                    <div className='facText'></div>
                    <img src='' alt='' />
                </div>
                <div>
                    <div className='facText'></div>
                    <img src='' alt='' />
                </div>
                <div>
                    <div className='facText'></div>
                    <img src='' alt='' />
                </div>
                <div>
                    <img src='' alt='' />
                </div>
                <div>
                    <div className='facText'></div>
                    <img src='' alt='' />
                </div>
            </div>
            <div id="rooms">
                <div className='roomText'></div>
                <Carousel effect="fade"  dotPosition={'right'}>
                    <div>
                    <h3 style={contentStyle}>1</h3>
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
            <div id="dining">
                <div>
                    <div className='diningText'></div>
                    <img src="" alt=''/>
                </div>
                <div>
                    <div className='diningText'></div>
                    <img src="" alt=''/>
                </div>
                <div>
                    <div className='diningText'></div>
                    <img src="" alt=''/>
                </div>
            </div>
            <div id="activity">
                <div className='actText'></div>
                <div>
                    <img src='' alt='' />
                </div>
                {/* 구현이 된다면 흘러가는 슬라이더로 하기 */}
            </div>
        </section>
        <footer>
            <div></div>
        </footer>
        </>
    );
};

export default Index;