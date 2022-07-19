import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setInput, setSubmit, goToHome} from '../../module/signup'
import { useNavigate } from 'react-router-dom';
import Signup from '../detail/Signup'

const SignUpContainer = () => {

    const createUser = useSelector(state=>state.users.createUser);
    const navigate = useNavigate();
    const onHome = () => {
        dispatch(goToHome(navigate));
    }
    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch(setInput(e));
    }
    const onSubmit = () => {
        dispatch(setSubmit());
    }

    return (
        <Signup onHome={onHome} onChange={onChange} onSubmit={onSubmit} createUser={createUser}/>
    );
};

export default SignUpContainer;