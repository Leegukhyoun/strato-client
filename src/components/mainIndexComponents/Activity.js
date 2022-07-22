import React from 'react';
import {Link} from 'react-router-dom'

const Activity = () => {
    
    return (
            <div id="activity" className='height'>
                <div> 
                    <div id='actText'>
                        <div>
                            <p className='Azonix'>Activity</p>
                            <p>호텔 투숙객을 위한 다양한 시설과, 최고급 레스토랑<br/>
                            아름다운 경관에서의 산뜻한 바베큐 등 최고의 시설을 즐겨보세요!</p>
                            <p className='NanumSquare'>Various facilities for hotel guests and top-notch restaurants<br/>
                            Enjoy the best facilities such as refreshing barbecue in a beautiful scenery!</p>
                        </div>
                        <ul>
                            <li>
                                <div className='actWindow'>
                                    <img src='images/5305.png' alt=''/>
                                </div>
                                <p className='actMenu'>Cafeteria</p>
                            </li>
                            <li>
                                <div className='actWindow'>
                                    <img src='images/5293.png' alt=''/>
                                </div>
                                <p className='actMenu'>SwmmingPool</p>
                            </li>

                            <li>
                                <Link to="/dining">
                                    <div className='actWindow'>
                                        <img src='images/b154ec78d18c223936b3ba1fd8ef14d3.png' alt=''/>
                                    </div>
                                    <p className='actMenu'>Restaurants</p>
                                </Link>
                            </li>
                            <li>
                                <div className='actWindow'>
                                    <img src='images/71ec93fac2b67af4c92a94cb94048185.jpg' alt=''/>
                                </div>
                                <p className='actMenu'>Barbecue</p>
                            </li>
                        </ul>
                    </div>
                    <div id='ActBg'></div>
                    <img src='images/ttt-12.png' alt='' />
                </div>
            </div>

    );
};

export default Activity;