import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../../module/signup';
import { setLogoututils } from '../../module/pageutils';
import classname from 'classname';

const ToggleBg = styled.div`
position: fixed;
top: 0;
right: -60%;
width: 30vw;
height: 100vh;
background-color: #000741;
z-index: 22;
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
background: #fff;
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
    return (
        <>
            <div className='headerWrap onColor'style={{background : isOn ? 'none' : ''}}>
                {isOn === false && <header>
                    <h1><Link to="/" style={{color : scrollindex === 3 ? '#000' : '#fff'}}><span className='headerSpan' id='titleFont'>Strato</span></Link></h1>
                    <ul>
                        <li style={{color : scrollindex === 3 ? '#000' : '#fff'}}>
                            <span className='headerSpan'>EN</span>
                        </li>
                        {/* <li><Link to="/reservation">Reservation</Link></li> */}
                        {sessionStorage.getItem('name')
                            ? <li><Link to="/rescheck" style={{color : scrollindex === 3 ? '#000' : '#fff'}}><span className='headerSpan'>Reservation</span></Link></li>
                            : <li><Link to="/reservation" style={{color : scrollindex === 3 ? '#000' : '#fff'}}><span className='headerSpan'>Reservation</span></Link></li>}
                        {sessionStorage.getItem('name')
                            ? <li onClick={LogoutFunc} style={{color : scrollindex === 3 ? '#000' : '#fff'}}><span className='headerSpan'>Logout</span></li>
                            : <li><Link to="/reservation" style={{color : scrollindex === 3 ? '#000' : '#fff'}}><span className='headerSpan'>Login</span></Link></li>}
                    </ul>
                </header>}
                <div id="toggle" onClick={toggleBtn} className={isOn ? 'on' : ''}>
                    <div className='toggleWrap'>
                        <ToggleSpan className='toggles toggleColor' isOn={isOn} style={{background : scrollindex === 3 ? '#000' : ''}}/>
                        <ToggleSpan className='toggles toggleColor' isOn={isOn} style={{background : scrollindex === 3 ? '#000' : ''}}/>
                        <ToggleSpan className='toggles toggleColor' isOn={isOn} style={{background : scrollindex === 3 ? '#000' : ''}}/>
                    </div>

                </div>
            </div>
            <BlackBg isOn={isOn} onClick={toggleBtn} />
            <ToggleBg isOn={isOn}>
                <ul id='subMenu'>
                    {sessionStorage.getItem('name')
                        ? <li><Link to="/rescheck" onClick={toggleBtn}>Reservation</Link></li>
                        : <li><Link to="/reservation" onClick={toggleBtn}>Reservation</Link></li>}
                    <li><Link to="/aboutus" onClick={toggleBtn}>About Us</Link></li>
                    <li><Link to="/rooms" onClick={toggleBtn}>Rooms</Link></li>
                    <li><Link to="/dining" onClick={toggleBtn}>Dining</Link></li>
                    <li><Link to="/membership" onClick={toggleBtn}>Sign-Up</Link></li>
                </ul>
            </ToggleBg>
        </>
    );
};

export default Header;