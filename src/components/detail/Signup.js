import React from 'react';

const Signup = () => {
    return (
        <div id="res">
        <div id="res-top">
            <img src='../images/dining_visual_05_2.png' alt=""/>
            <h2>Strato 멤버십 가입</h2>
        </div>
        <div id="res-confirm">
            <h2>회원 정보 입력</h2>
            <div id="mWrap" className="loginBox">
                <ul>
                    <li>
                        <div className="textBox">
                            <p>＊ 필수입력</p>
                        </div>
                    </li>
                    <li>
                        <div className="textBox">
                            <p>＊ 아이디</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default Signup;