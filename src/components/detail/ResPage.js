import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ResPage = () => {
    const navigate = useNavigate();
    const [ user, setUser ] = useState({
        name: "",
        birth: "",
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(user.name !== "" && user.birth !== ""){
            insertCustomer();
            setUser({
                name: "",
                birth: ""
            })
        }
    }

    function insertCustomer(){
        axios.post(`http://localhost:3001/userlogin`, user)
        .then( res =>{
            const data = res.data;
            console.log(data)
            if(data === 'id is undefined') return alert('id가 올바르지 않습니다.');
            if(data === 'pw is undefined') return alert('password가 올바르지 않습니다.');
            if(data === 'login successed'){
                alert('login 성공!');
                sessionStorage.setItem('name', user.name);
            };
            navigate("/");
        })
        .catch(e=>console.log(e))
    }

    




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
                        <form className="login" onSubmit={onSubmit} >
                            <div className="lWrap">
                                <input name="name" type="text" placeholder="이름" onChange={onChange} value={user.name}/>
                                <input name="birth" type="password" placeholder="생년월일" onChange={onChange} value={user.birth}/>
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
        </div>
    );
};

export default ResPage;
