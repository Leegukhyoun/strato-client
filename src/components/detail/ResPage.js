import React from 'react';

const ResPage = () => {
    return (
        <div id="res">
            <div id="res-top">
                <img src='../images/dining_visual_05_2.png' alt=""/>
                <h2>예약조회</h2>
            </div>
            <div id="res-confirm">
                <h2>예약조회</h2>
                <div id="mWrap">
                    <div className="member">
                        <h3>회원 로그인</h3>
                        <p>
                        로그인 하시면 회원님의 예약현황을 확인하실 수 있습니다.
                        </p>
                        <form className="login">
                            <div className="lWrap">
                                <input type="text" placeholder="아이디"/>
                                <input type="password" placeholder="비밀번호"/>
                            </div>
                            <button>로그인</button>
                        </form>
                    </div>
                    <div className="member">
                        <h3>비회원 예약조회</h3>
                        <p>비회원으로 예약하신 분은 예약번호와 예약 시 설정하신
                            비밀번호를 입력하시면 예약의 상세정보를 확인하실 수 있습니다.
                        </p>
                        <form className="login">
                            <div className="lWrap">
                                <input type="text" placeholder="아이디"/>
                                <input type="password" placeholder="비밀번호"/>
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
