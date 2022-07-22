import React, { useState} from 'react';
import styled, { css } from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../../module/signup';
import {BsFillPersonFill} from "react-icons/bs"
const ToggleBg = styled.div`
position: fixed;
top: 0;
right: -60%;
width: 30vw;
height: 100vh;
background-color: #000741;
z-index: 25;
transition: 0.5s;
${props =>
        props.isOn &&
        css`
        right: 0;
    `

    }
`
const ToggleSpan = styled.span`
display: block;
background: #222;
width: 30px;
height: 3px;
transition: 0.5s;
&:not(:last-child){
    margin-bottom: 4px;
}
${props =>
        props.isOn &&
        css`
        &:nth-child(1){
            transform: rotate(45deg);
            position: absolute;
            top: 7px;
        }
        &:nth-child(2){
            opacity : 0;
            transition : 0.01s;
        }
        &:nth-child(3){
            transform: rotate(-45deg);
        }
    `
    }
`

const BlackBg = styled.div`
position: fixed;
top:0;
left:0;
background-color: rgba(0,0,0,0.7);
display:none;
width:100vw;
height:100vh;
transition: 0.5s;
z-index : 21;
${props =>
        props.isOn &&
        css`
    display : block;
`
    }
`



const Header = () => {
    const navigate = useNavigate();    
    //eslint-disable-next-line
    const loginUser = useSelector(state=>state.users.loginUser);
    const scrollindex = useSelector(state=>state.utils.utils.scrollindex);
    const dispatch = useDispatch();
    const [isOn, setIsOn] = useState(false);
    function toggleBtn() {
        setIsOn(!isOn);
    }
    const LogoutFunc = () => {
        sessionStorage.clear();
        alert('로그아웃 되었습니다.');
        navigate("/");
        dispatch(setLogout());
    }
    const SubLogout = () => {
        setIsOn(!isOn);
        LogoutFunc();
    }
    return (
        <>
            <div className='headerWrap' style={{color: scrollindex === 3 ? '#222' : '', background: isOn ? 'none' : ''}}>
                <header style={{display : isOn ? 'none' : 'flex'}}>
                    <h1><Link to="/"><span id='titleFont'>STRATO</span></Link></h1>
                    <ul className='headerUl'>
                        <li>
                            {sessionStorage.getItem('name')
                                ?   
                                <div id='userImg'>
                                    <div id='bgIcon'>
                                        <BsFillPersonFill id='Icon' />
                                    </div>
                                    <p id='idText'>{sessionStorage.getItem('name')}</p>
                                </div>
                                : 
                                <Link to="/reservation">
                                    <div id='userImg'>
                                        <div id='bgIcon'>
                                            <BsFillPersonFill id='Icon'/>
                                        </div>
                                        <p id='idText'>로그인해주세요</p>
                                    </div>
                                </Link>
                                }
                        </li>
                        <li>
                           EN
                        </li>
                        {sessionStorage.getItem('name')
                            ? <li><Link to="/rescheck">Reservation</Link></li>
                            : <li><Link to="/reservation">Reservation</Link></li>}
                        {sessionStorage.getItem('name')
                            ? <li onClick={LogoutFunc} className="pointer">Logout</li>
                            : <li><Link to="/reservation">Login</Link></li>}
                    </ul>
                </header>
                <div id="toggle" onClick={toggleBtn} className={isOn ? 'on' : ''}>
                    <div className='toggleWrap'>
                        <ToggleSpan className='toggles' isOn={isOn} style={{background: scrollindex === 3 ? '#222' : ''}}/>
                        <ToggleSpan className='toggles' isOn={isOn} style={{background: scrollindex === 3 ? '#222' : ''}}/>
                        <ToggleSpan className='toggles' isOn={isOn} style={{background: scrollindex === 3 ? '#222' : ''}}/>
                    </div>

                </div>
            </div>
            <BlackBg isOn={isOn} onClick={toggleBtn} />
            <ToggleBg isOn={isOn}>
                <ul id='subMenu'>
                    {sessionStorage.getItem('name')
                        ? <li><Link to="/rescheck" onClick={toggleBtn} className='subText'>Reservation</Link></li>
                        : <li><Link to="/reservation" onClick={toggleBtn} className='subText'>Reservation</Link></li>}
                    <li><Link to="/aboutus" onClick={toggleBtn} className='subText'>About Us</Link></li>
                    <li><Link to="/rooms" onClick={toggleBtn} className='subText'>Rooms</Link></li>
                    <li><Link to="/dining" onClick={toggleBtn} className='subText'>Dining</Link></li>
                    {sessionStorage.getItem('name')
                        ? <li onClick={SubLogout} className='subText'>LogOut</li>
                        :  <li><Link to="/membership" onClick={toggleBtn} className='subText'>Sign-Up</Link></li>}
                </ul>
            </ToggleBg>
        </>
    );
};

export default Header;