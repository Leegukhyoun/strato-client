import axios from "axios";

// 리덕스 액션타입, 초깃갑, 액션 생성 함수, 리듀서
const GET_USERS = "GET_USERS";
const GET_USERS_ERROR = "GET_USERS_ERROR";
const GET_USERS_CREATE = "GET_USERS_CREATE";
const SET_SIGNUP_INPUT = "SET_SIGNUP_INPUT";
const SET_SIGNUP_RESET = "SET_SIGNUP_RESET";   


 

// 초기값 설정
const initialState = {
    users: {
        loading: false,
        data: null,
        error: null,
    },
    createUser: {
        name: "",
        phone:"",
        birth: "",
        gender: "",
        addr1: "",
        addr2: "",
    },
    loginUser: {
        name:"",
        phone:"",
    }
}

// 액션 생성 함수
export const setInput = (e) => {
    const { name, value } = e.target;
    return {
        type: SET_SIGNUP_INPUT,
        name,
        value
    }
}



//홈으로 이동 함수
export const goToHome = (navigate) => () => {
    navigate('/');
}

// thunk함수를 사용하요 액션객체 디스패치하기
export const getUsers = () => async dispatch => {
    dispatch({ type: GET_USERS }) //요청시작
    try{
        const response = await axios.get(`http://localhost:3001/members`)
        const users = response.data;
        dispatch({ type:GET_USERS_CREATE, users })
    }
    catch (e){
        dispatch({ type:GET_USERS_ERROR, error: e })
    }
}

export const setSubmit = () => async (dispatch, getState) => {
    const formdata = getState().users.createUser;
    try{
        const response = await axios.post(`http://localhost:3001/createMem`, formdata)
        dispatch({ type: SET_SIGNUP_RESET})
    }
    catch(e) {
        dispatch({ type: SET_SIGNUP_RESET})
    }
}

//리듀서 만들기
export default function users(state = initialState, action) {
    switch(action.type){
        case GET_USERS:
            return {
                ...state,
                users: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case GET_USERS_CREATE:
            return {
                ...state,
                users: {
                    loading: false,
                    data: action.users,
                    error: null
                }
            }
        case GET_USERS_ERROR:
            return {
                ...state,
                users: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            }
        case SET_SIGNUP_INPUT:
            return {
                ...state,
                createUser: {
                    ...state.createUser,
                    [action.name] : action.value
                    }

            }
        case SET_SIGNUP_RESET:
            return {
                ...state,
                createUser: {
                    ...state.createUser,
                    name: "",
                    phone:"",
                    birth: "",
                    gender: "",
                    addr1: "",
                    addr2: "",
                }
            }
        
        //로그인 리듀서
        case GET_LOGIN_SUCCESS:
            return {
                ...state,
                loginUser: {
                    loading: false,
                    data: action.loginUser,
                    error: null
                }
            }
        case GET_LOGIN_ERROR:
            return {
                ...state,
                loginUser: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            }
        case SET_LOGIN_INPUT:
            return {
                ...state,
                loginUser: {
                    ...state.loginUser,
                    [action.name] : action.value
                    }

            }
        //로그인 리듀서 끝
        default:
            return state;
    }
}

// 로그인 액션타입
const GET_LOGIN_ERROR = "GET_LOGIN_ERROR";
const GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS";
const SET_LOGIN_INPUT = "SET_LOGIN_INPUT";

// 로그인 액션 생성 함수
export const setLoginInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    return {
        type: SET_LOGIN_INPUT,
        name,
        value
    }
}


// thunk함수를 사용하요 액션객체 디스패치하기
export const getLogin = () => async (dispatch, getState) => {
    const formdata = getState().users.loginUser;
    dispatch({ type: GET_USERS }) //요청시작
    try{
        const response = await axios.post(`http://localhost:3001/userlogin`, formdata);
        const users = response.data;
        dispatch({ type:GET_LOGIN_SUCCESS, users})
            if(users === 'id is undefined') return alert('id가 올바르지 않습니다.');
            if(users === 'pw is undefined') return alert('password가 올바르지 않습니다.');
            if(users === 'login successed'){
                alert('login 성공!');
                sessionStorage.setItem('name', users.name);
            };
    }
    catch (e){
        dispatch({ type:GET_LOGIN_ERROR, error: e })
    }
}
