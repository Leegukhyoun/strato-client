import React,{useState, useEffect} from 'react';
import Footer from '../Include/Footer';

const ResPage = ({onHome, onChange, onSubmit, loginUser}) => {


    const onSubmitch = (e) => {
        e.preventDefault();
        if(loginUser.name !== "" && loginUser.birth !== ""){
            onSubmit();
            onHome();
        }
    }


    const [isOn, setIsOn] = useState(null);
    
    useEffect(()=>{
        setIsOn(true);
        if(isOn===true){
            const footer = document.querySelector('footer');
            footer.style.bottom = -50 + '%';
        }
    },[isOn])




    return (
        <div id="res">
            <div id="res-top">
                <img src='../images/dining_visual_05_2.png' alt=""/>
                <h2>Reservation</h2>
            </div>
            <div id="res-confirm">
                <h2>예약조회</h2>
                <div id="mWrap">
                    <div className="member">
                        <h3>회원 로그인</h3>
                        <p>
                        로그인 하시면 회원님의 예약현황을 확인하실 수 있습니다.
                        </p>
                        <form className="login" onSubmit={onSubmitch} >
                            <div className="lWrap">
                                <input name="name" type="text" placeholder="이름" onChange={onChange} value={loginUser.name}/>
                                <input name="phone" type="password" placeholder="전화번호" onChange={onChange} value={loginUser.phone}/>
                            </div>
                            <button type='submit'>로그인</button>
                        </form>
                    </div>
                    <div className="member">
                        <h3>비회원 예약조회</h3>
                        <p>비회원으로 예약하신 분은 예약번호와 예약 시 설정하신
                            정보를 입력하시면 예약의 상세정보를 확인하실 수 없습니다.
                        </p>
                        <form className="login">
                            <div className="lWrap">
                                <input type="text" placeholder="이름"/>
                                <input type="password" placeholder="생년월일"/>
                            </div>
                            <button>예약확인</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ResPage;
