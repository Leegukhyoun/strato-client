import React from 'react';

const Facilities = () => {
    return (
        <div id="facilities" className='height'>
                <h1>strato wellness</h1>
                <div id="f-line"></div>
                <div id="f-img01">
                    <div className='facText'></div>
                    {/* images/wellness_01.png */}
                    <img src='images/wellness_06.png' alt='01' />
                </div>
                <div id="f-text">
                    <div>자연 속 몸과 마음의 건강을 유지하며 여유로운 휴식을 즐길 수 있습니다.</div>
                </div>
                <div id="f-img02">
                    <div className='facText'></div>
                    <img src='images/wellness_04.png' alt='02' />
                </div>
                <div id="f-img03">
                    <div className='facText'></div>
                    <img src='images/wellness_05.png' alt='03' />
                </div>
                <div id="f-img04">
                    <img src='images/wellness_01.png' alt='04' />
                </div>
                <div id="f-img05">
                    <div className='facText'></div>
                    <img src='images/wellness_02.png' alt='05' />
                </div>
            </div>
    );
};

export default Facilities;