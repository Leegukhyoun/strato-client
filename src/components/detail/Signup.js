import React,{useState} from 'react';
import PopupPostCode from './AddressSearch/PopupPostCode';
import PopupDom from './AddressSearch/PopupDom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const navigate = useNavigate();
    
    const onAddData = (data) => {
        console.log(data);
        setUserData({
            ...userData,
            addr1 : data.address
        })
    }

    
    const [ isPopupOpen, setIsPopupOpen ] = useState(false);
    
    
    const openPostCode = (e) => {
        e.preventDefault();
        setIsPopupOpen(true);
    }
    
    const closePostCode = (e) => {
        e.preventDefault();
        setIsPopupOpen(false);
    }

    const [ userData, setUserData ] = useState({
        name: "",
        phone: "",
        birth: "",
        gender: "",
        addr1: "",
        addr2: "",
    })
    const onChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(userData.name !== "" && userData.phone !== "" && userData.birth !== "" && userData.gender !== "" && userData.addr1 !== ""){
            insertCustomer();
        }
    }
    function insertCustomer(){
        axios.post(`http://localhost:3001/createMem`, userData)
        .then((result)=>{
            console.log(result);
            alert('회원가입이 완료되었습니다.');
            navigate("/");
        })
        .catch(e=>console.log(e))
    }
    return (
        <div id="res">
            <div id="res-top">
                <img src='../images/dining_visual_05_2.png' alt=""/>
                <h2>Strato 멤버십 가입</h2>
            </div>
            <div id="res-confirm">
                <h2>회원 정보 입력</h2>
                <div id="mWrap" className="loginBox">
                    <form  onSubmit={onSubmit}>
                        <ul>
                            <li>
                                <div className="textBox">
                                    <p>＊ 필수입력</p>
                                </div>
                            </li>
                            <li>
                                <div className="textBox">
                                    <p>＊ 이름</p>
                                    <p>
                                        <input name="name" type="text" placeholder="아이디를 입력해주세요." value={userData.name} onChange={onChange}/>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="textBox" >
                                    <p>＊ 전화번호</p>
                                    <p>
                                        <input name="phone" type="text" placeholder="연락처를 입력해주세요." value={userData.phone} onChange={onChange}/>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="textBox">
                                    <p>＊ 생년월일</p>
                                    <p>
                                        <input name="birth" type="text" placeholder="생년월일을 입력해주세요." value={userData.birth} onChange={onChange}/>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="textBox">
                                    <p>＊ 생년월일</p>
                                    <p>
                                        <span>남성</span><input name="gender" type="radio" value="남성" className="radioInput" onChange={onChange}/>
                                        <span>여성</span><input name="gender" type="radio" value="여성" className="radioInput" onChange={onChange}/>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="textBox">
                                    <p>＊ 주소 <button className="inputButton" onClick={openPostCode}>주소 찾기</button></p>
                                    <p>
                                        <input type="text" placeholder="주소를 입력하거나 찾으세요." name="addr1" value={userData.addr1} onChange={onChange}/>
                                        <input type="text" placeholder="상세 주소를 입력하세요." name="addr2" value={userData.addr2} onChange={onChange}/>
                                    </p>
                                    <div id="popupDom">
                                    {isPopupOpen && (
                                        <PopupDom>
                                            <PopupPostCode onClose={closePostCode} onAddData={onAddData}/>
                                        </PopupDom>
                                    )}
                                </div>
                                </div>
                            </li>
                            <li>
                                <button type="submit">회원가입</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;