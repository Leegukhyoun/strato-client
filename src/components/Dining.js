import React, { useState } from 'react';

const Dining = () => {
    const [isOn, setIsOn] = useState(true);
    const onMouseEnter = ()=>{
        setIsOn(true);
    }
    const onMouseLeave = ()=>{
        setIsOn(true)
    }
    const otherLiEnter = ()=>{
        setIsOn(false)
    }
    return (
        <div id="dining" className='height'>
            <ul>
                <li onMouseEnter={onMouseEnter} className={isOn ? "diningLi mainLi" : "diningLi" }>
                    <div className='diningText'>
                        <h3>dining1</h3>
                    </div>
                    <img src="images/dining/dining_1.png" alt='다이닝룸사진1' />
                </li>
                <li className="diningLi" onMouseLeave={onMouseLeave} onMouseEnter={otherLiEnter}>
                    <div className='diningText'>
                        <h3>dining2</h3>
                    </div>
                    <img src="images/dining/dining_4.png" alt='다이닝룸사진2' />
                </li>
                <li className="diningLi" onMouseLeave={onMouseLeave} onMouseEnter={otherLiEnter}>
                    <div className='diningText'>
                        <h3>dining3</h3>
                    </div>
                    <img src="images/dining/dining_5.png" alt='다이닝룸사진3' />
                </li>
            </ul>
        </div>
    );
};

export default Dining;