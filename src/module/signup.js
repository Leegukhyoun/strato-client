import axios from "axios";




// 리덕스 액션타입, 초깃갑, 액션 생성 함수, 리듀서
const SET_SIGNUP_INPUT = "SET_SIGNUP_INPUT";
const SET_SIGNUP_RESET = "SET_SIGNUP_RESET";   


 

// 초기값 설정
const initialState = {
    createUser: {
        name: "",
        phone:"",
        birth: "",
        gender: "",
        addr1: "",
        addr2: "",
    },
    loginUser: {
        loading: false,
        data: null,
        error: null,
        name : "",
        phone: "",
        islog : null,
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
export const setLogout = () => {
    return {
        type: SET_LOGOUT,
    }
}


//홈으로 이동 함수
export const goToHome = (navigate) => () => {
    navigate('/');
}

// thunk함수를 사용하요 액션객체 디스패치하기


export const setSubmit = () => async (dispatch, getState) => {
    const formdata = getState().users.createUser;
    try{
        const response = await axios.post(`http://localhost:3001/createMem`, formdata)
        alert('회원 가입에 성공하였습니다.')
        dispatch({ type: SET_SIGNUP_RESET})
    }
    catch(e) {
        dispatch({ type: SET_SIGNUP_RESET})
    }
}

//리듀서 만들기
export default function users(state = initialState, action) {
    switch(action.type){
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
                    ...state.loginUser,
                    loading: false,
                    data: action.loginUser,
                    error: null
                }
            }
        case GET_LOGIN_ERROR:
            return {
                ...state,
                loginUser: {
                    ...state.loginUser,
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
        case SET_LOGIN:
            return {
                ...state,
                loginUser: {
                    ...state.loginUser,
                    islog: action.nowLoged
                }
            }
        case SET_LOGOUT:
            return {
                ...state,
                loginUser: {
                    ...state.loginUser,
                    islog: null
                }
            }
        case SET_LOGINPUT_RESET:
            return {
                ...state,
                loginUser: {
                    ...state.loginUser,
                    loading: false,
                    data: null,
                    error: null,
                    name : "",
                    phone: "",
                    islog : null,
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
const SET_LOGIN = "SET_LOGIN";
const SET_LOGOUT = "SET_LOGOUT";
const SET_LOGINPUT_RESET = "SET_LOGINPUT_RESET";

// 로그인 액션 생성 함수
export const setLoginInput = (e) => {
    const { name, value } = e.target;
    return {
        type: SET_LOGIN_INPUT,
        name,
        value
    }
}



// thunk함수를 사용하요 액션객체 디스패치하기
export const getLogin = () => async (dispatch, getState) => {
    const formdata = getState().users.loginUser;
    try{
        const response = await axios.post(`http://localhost:3001/userlogin`, formdata);
        const users = response.data;
        dispatch({ type:GET_LOGIN_SUCCESS, users})
            if(users === 'id is undefined') return "id";
            if(users === 'pw is undefined') return "pw";
            if(users === 'login successed'){
                sessionStorage.setItem('name', formdata.name);
                const nowLoged = sessionStorage.getItem('name');
                dispatch({type : SET_LOGIN, nowLoged})
                dispatch({type : SET_LOGINPUT_RESET})
                return "성공"
            };
    }
    catch (e){
        dispatch({ type:GET_LOGIN_ERROR, error: e })
    }
}
