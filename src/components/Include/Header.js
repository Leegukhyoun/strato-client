import React,{ useState } from 'react';
import styled, { css } from 'styled-components'


const ToggleBg = styled.div`
position: fixed;
top: 0;
right: -60%;
width: 30vw;
height: 100vh;
background-color: #000741;
z-index: 22;
transition: 0.5s;
${props=>
    props.isOn &&
    css`
        right: 0;
    `

}
`
const ToggleSpan = styled.span`
background: #fff;
width: 30px;
height: 3px;
transition: 0.5s;
&:not(:last-child){
    margin-bottom: 4px;
}
${props=>
    props.isOn &&
    css `
        &:nth-child(1){
            transform: rotate(45deg);
            position : absolute;
            bottom : 42px;
        }
        &:nth-child(2){
            opacity : 0;
            transition : 0.01s;
        }
        &:nth-child(3){
            transform: rotate(-45deg);
            position : absolute;
        }
    `
}
`

const BlackBg = styled.div`
position: absolute;
top:0;
left:0;
background-color: rgba(0,0,0,0.7);
display:none;
width:100vw;
height:100vh;
transition: 0.5s;
z-index : 21;
${props=>
props.isOn &&
css `
    display : block;
`
}
`



const Header = () => {
    const [ isOn, setIsOn ] = useState(false);

    function toggleBtn(){
        setIsOn(!isOn);

    }
    return (
        <>
            <header>
            <h1 >안녕하세요</h1>
            <ul>
                <li>EN</li>
                <li>Reservation</li>
                <li>Login</li>
                <li id="toggle" onClick={toggleBtn}>
                    <ToggleSpan className='toggles' isOn={isOn}/>
                    <ToggleSpan className='toggles' isOn={isOn}/>
                    <ToggleSpan className='toggles' isOn={isOn}/>
                </li>
            </ul>
            </header>
            <BlackBg isOn={isOn}/>
            <ToggleBg isOn={isOn}>
                <ul id='subMenu'>
                    <li>Reservation</li>
                    <li>About Us</li>
                    <li>Rooms</li>
                    <li>Dining</li>
                    <li>Activity</li>
                </ul>
            </ToggleBg>
        </>  
    );
};

export default Header;