import React from 'react';
import {BsArrowUpCircleFill} from "react-icons/bs"


const TopBtn = ({scrollIndex, TopRef}) => {
    return (
        <div style={{
            position: 'absolute',
            bottom: 5+'%',
            right: 5+'%',
            fontSize: 50+'px',
            color: scrollIndex === 3? '#000' : '#fff',
            transition: 0.5+'s',
            cursor: 'pointer',
            zIndex: '100',
        }} id="ToBtn" ref={TopRef}>
            <BsArrowUpCircleFill/>
        </div>
    );
};

export default TopBtn;