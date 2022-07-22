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
        console.log(loginUser.name);
        dispatch(getLogin());
            dispatch(getLogin()).then((result) => {
                console.log(result);
                if(result === "id"){
                    return alert('아이디가 맞지 않습니다.')
                }else if(result === 'pw'){
                    return alert('비밀번호가 맞지 않습니다.')
                } else if(result === "성공"){
                    onHome();
                }
            });
        console.log(loginUser.name);
    }

    return (
        <ResPage onHome={onHome} onChange={onChange} onSubmit={onSubmit} loginUser={loginUser}/>
    );
};

export default LoginContainer;