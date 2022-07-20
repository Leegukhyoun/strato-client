import React,{useState,useEffect} from 'react';
import PopupPostCode from './AddressSearch/PopupPostCode';
import PopupDom from './AddressSearch/PopupDom';

const Signup = ({onChange, onHome, onSubmit, createUser}) => {
    console.log(onChange, createUser)
    
    //우편번호 관리
    const onAddData = (data) => {
        console.log(data);
        const postAdd = data.address;
        onChange({
            target : {
                name : 'addr1',
                value : postAdd
            }
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
    //우편번호 관리 끝
    

    const onSubmitch = (e) => {
        e.preventDefault();
        if(createUser.name !== "" && createUser.phone !== "" && createUser.birth !== "" && createUser.gender !== "" && createUser.addr1 !== ""){
            onSubmit();
            onHome();
        }
    }




    return (
        <div className="res">
            <div className="res-top">
                <img src='../images/dining_visual_05_2.png' alt=""/>
                <h2>Strato 멤버십 가입</h2>
            </div>
            <div className="res-confirm">
                <h2>회원 정보 입력</h2>
                <div className="mWrap loginBox contentInner">
                    <form  onSubmit={onSubmitch}>
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
                                        <input name="name" type="text" placeholder="아이디를 입력해주세요." value={createUser.name} onChange={onChange}/>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="textBox" >
                                    <p>＊ 전화번호</p>
                                    <p>
                                        <input name="phone" type="text" placeholder="연락처를 입력해주세요." value={createUser.phone} onChange={onChange}/>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="textBox">
                                    <p>＊ 생년월일</p>
                                    <p>
                                        <input name="birth" type="text" placeholder="생년월일을 입력해주세요." value={createUser.birth} onChange={onChange}/>
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
                                        <input type="text" placeholder="주소를 입력하거나 찾으세요." name="addr1" value={createUser.addr1} onChange={onChange}/>
                                        <input type="text" placeholder="상세 주소를 입력하세요." name="addr2" value={createUser.addr2} onChange={onChange}/>
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