import axios from "axios";

// 리덕스 액션타입, 초깃갑, 액션 생성 함수, 리듀서
const GET_RES = "GET_RES";
const GET_RES_ERROR = "GET_RES_ERROR";
const GET_RES_ADD = "GET_RES_ADD";
const SET_RES_INPUT = "SET_RES_INPUT";
const SET_RES_RESET = "SET_RES_RESET";


const initialState = {
    res: {
        loading: false,
        data: null,
        error: null,
        scrollindex : 1,
    },
}