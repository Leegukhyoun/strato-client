import React from 'react';

const ResPage = () => {
    return (
        <div id="res">
            <div id="res-top">
                <img src='../images/dining_visual_05_2.png' alt=""/>
                <h2>예약조회</h2>
            </div>
            <div id="res-confirm">
                <h3>예약조회</h3>
                <div id="member">
                    <h3>회원 로그인</h3>
                    <p>
                    로그인 하시면 회원님의 예약현황을 확인하실 수 있습니다.
                    </p>
                </div>
                <div id="non-member">
                    <h3>비회원 예약조회</h3>
                    <p>비회원으로 예약하신 분은 예약번호와 예약 시 설정하신
                        비밀번호를 입력하시면 예약의 상세정보를 확인하실 수 있습니다.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ResPage;
