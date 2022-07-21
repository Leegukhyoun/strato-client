import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setLoginInput, getLogin, goToHome} from '../../module/signup'
import { setLogin } from '../../module/pageutils';
import { useNavigate } from 'react-router-dom';
import ResPage from '../detail/ResPage'

const LoginContainer = () => {

    const loginUser = useSelector(state=>state.users.loginUser);
    const Check = sessionStorage.getItem('name') ? true : false;
    
    const navigate = useNavigate();
    const onHome = () => {
        dispatch(goToHome(navigate));
    }
    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch(setLoginInput(e));
    }
    const onSubmit = () => {
        // dispatch(setLogin());
        dispatch(getLogin());
    }

    return (
        <ResPage onHome={onHome} onChange={onChange} onSubmit={onSubmit} loginUser={loginUser}/>
    );
};

export default LoginContainer;