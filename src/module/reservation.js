import axios from "axios";
import moment from "moment";


// 리덕스 액션타입, 초깃갑, 액션 생성 함수, 리듀서
const GET_RES = "GET_RES";
const GET_RES_ERROR = "GET_RES_ERROR";
const GET_RES_ADD = "GET_RES_ADD";
const SET_RES_INPUT = "SET_RES_INPUT";
const SET_RES_RESET = "SET_RES_RESET";
const SET_ADULT_ADD = "SET_ADULT_ADD";
const SET_ADULT_PREV = "SET_ADULT_PREV";
const SET_KIDS_ADD = "SET_KIDS_ADD";
const SET_KIDS_PREV = "SET_KIDS_PREV";
const SET_CAL1 = "SET_CAL1";
const SET_CAL2 = "SET_CAL2";
const SET_ROOM = "SET_ROOM";
const SET_NAME = "SET_NAME";


// 초기값 설정
const initialState = {
    res: {
        loading: false,
        data: null,
        error: null,
    },
    addRoom: {
        room: "STANDARD",
        imgsrc: "images/rooms/rooms_visual_1.png",
        checkin: moment().format('YYYY-MM-DD'),
        checkout: moment().format('YYYY-MM-DD'),
        adult: 0,
        kids: 0,
        name: "",
    },
}

// 액션 생성 함수
export const setInput = (e) => {
    const { name, value } = e.target;
    return {
        type: SET_RES_INPUT,
        name,
        value
    }
}
export const setRoom = (e) => {
    const { value } = e.target;
    if(value === "STANDARD"){
        return {
            type: SET_ROOM,
            value,
            imgsrc: 'images/rooms/rooms_visual_1.png'
        }
    }
    if(value === "SUPERIOR"){
        return {
            type: SET_ROOM,
            value,
            imgsrc: 'images/rooms/rooms_visual_2.png'
        }
    }
    if(value === "DELUXE"){
        return {
            type: SET_ROOM,
            value,
            imgsrc: 'images/rooms/rooms_visual_3.png'
        }
    }
    if(value === "SUITE"){
        return {
            type: SET_ROOM,
            value,
            imgsrc: 'images/rooms/rooms_visual_4.png'
        }
    }
}
export const setNumber = (people) => {
    return {
        type: people,
    }
}
export const setCinState = (date) => {
    return {
        type: SET_CAL1,
        checkin : date.format('YYYY-MM-DD')
    }
}
export const setCoutState = (date) => {
    return {
        type: SET_CAL2,
        checkout : date.format('YYYY-MM-DD')
    }
}
export const setName = (sessionId) => {
    return {
        type: SET_NAME,
        sessionId
    }
}
export const resReset = () => {
    return {
        type: SET_RES_RESET,
    }
}

export const setSubmit = () => async (dispatch, getState) => {
    const formdata = getState().res.addRoom;
    try {
        const response = await axios.post(`http://localhost:3001/createRes`, formdata);
    }
    catch (e) {
        dispatch({ type: SET_RES_RESET })
    }
}

export const searchRes = () => async dispatch => {
    dispatch({type: GET_RES});
    const sessionId = sessionStorage.getItem('name');
    try {
        const response = await axios.get(`http://localhost:3001/rescheck/${sessionStorage.getItem('name')}`);
        const res = response.data;
        dispatch({type:GET_RES_ADD, res})
    }
    catch(e){
        dispatch({type:GET_RES_ERROR, error : e})
    }
}


export default function res(state = initialState, action) {
    switch (action.type) {
        case GET_RES:
            return {
                ...state,
                res: {
                    loading: true,
                    data: null,
                    error: null
                }
            }
        case GET_RES_ADD:
            return {
                ...state,
                res: {
                    loading: false,
                    data: action.res,
                    error: null
                }
            }
        case GET_RES_ERROR:
            return {
                ...state,
                res: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            }
        case SET_RES_INPUT:
            return {
                ...state,
                addRoom: {
                    ...state.addRoom,
                    [action.name]: action.value
                }

            }
        case SET_RES_RESET:
            return {
                ...state,
                addRoom: {
                    ...state.addRoom,
                    room: "STANDARD",
                    imgsrc: "images/rooms/rooms_visual_1.png",
                    checkin: moment().format('YYYY-MM-DD'),
                    checkout: moment().format('YYYY-MM-DD'),
                    adult: 0,
                    kids: 0,
                    name: "",
                }
            }
        case SET_ADULT_ADD:
            return {
                ...state,
                addRoom: {
                    ...state.addRoom,
                    adult: state.addRoom.adult + 1
                }
            }
        case SET_ADULT_PREV:
            return {
                ...state,
                addRoom: {
                    ...state.addRoom,
                    adult: state.addRoom.adult - 1
                }
            }
        case SET_KIDS_ADD:
            return {
                ...state,
                addRoom: {
                    ...state.addRoom,
                    kids: state.addRoom.kids + 1
                }
            }
        case SET_KIDS_PREV:
            return {
                ...state,
                addRoom: {
                    ...state.addRoom,
                    kids: state.addRoom.kids - 1
                }
            }
        case SET_CAL1:
            return {
                ...state,
                addRoom: {
                    ...state.addRoom,
                    checkin: action.checkin
                }
            }
        case SET_CAL2:
            return {
                ...state,
                addRoom: {
                    ...state.addRoom,
                    checkout: action.checkout
                }
            }
        case SET_ROOM:
            return {
                ...state,
                addRoom: {
                    ...state.addRoom,
                    room: action.value,
                    imgsrc : action.imgsrc
                }
            }
        case SET_NAME:
            return {
                ...state,
                addRoom: {
                    ...state.addRoom,
                    name: action.sessionId,
                }
            }
        default:
            return state;
    }
}