import React, {useEffect} from 'react';
import {BsArrowUpCircleFill} from "react-icons/bs"


const TopBtn = () => {
    
    return (
        <div style={{
            position: 'absolute',
            bottom: 5+'%',
            right: 5+'%',
            fontSize: 50+'px',
            // color: scrollNow == 0 ? '#fff' : '#000',
            transition: 0.5+'s',
            cursor: 'pointer',
        }}>
            <BsArrowUpCircleFill/>
        </div>
    );
};

export default TopBtn;