import React from "react";
import { Carousel } from 'antd';
import "antd/dist/antd.css";



const contentStyle = {
    height: '80vh',
    width: '70vw',
    color: '#fff',
    lineHeight: '80vh',
    textAlign: 'center',
    background: '#364d79',
};

const DiningIndex = () => {
    return (
        <>
            <div id='diningIndex'>
                <div className="dinDetailTitle">
                    <h2>DINING</h2>
                </div>
                <div className='diningCon contentInner'>
                    <h2>다이내믹 키친 뷔페 레스토랑</h2>
                    <p>세계 각국의 트렌디한 메뉴를 테마별로 선보이는 뷔페레스토랑으로<br />
                        라이브 스테이션에서 최상의 퀄리티로 제공되는 즉석 메뉴, 호텔 직영 농장 식재료를 사용한 건강식 등 다채로운 셀렉션이 준비되어 있습니다.<br />
                        하지만 운영은 하지 않으니 배달 시켜 드시길 바랍니다.</p>
                    <h2>운영 시간</h2>
                    <table>
                        <tr>
                            <td rowSpan="3">WEEKDAY / WEEKEND</td>
                            <td>BREAKFAST</td>
                            <td>06:30 ~ 10:00</td>
                        </tr>
                        <tr>
                            <td>LUNCH</td>
                            <td>12:00 ~ 15:00</td>
                        </tr>
                        <tr>
                            <td>DINNER</td>
                            <td>18:00 ~ 21:30</td>
                        </tr>
                    </table>
                    <p className='gray'>※ 토요일 저녁, 일요일/공휴일 점심의 경우 예약 상황에 따라 2부제로 운영될 수 있습니다.</p>
                    <h2>운영 시간</h2>
                    <table>
                        <tr>
                            <td>BREAKFAST</td>
                            <td>ALL</td>
                            <td>성인 5,000 KRW / 어린이 200,000 KRW / 미취학 아동 200 KRW</td>
                        </tr>
                        <tr>
                            <td rowSpan="2">LUNCH</td>
                            <td>Mon-Fri</td>
                            <td>성인 7,000 KRW / 어린이 300,000 KRW / 미취학 아동 500 KRW</td>
                        </tr>
                        <tr>
                            <td>Sat-Sun, Holiday</td>
                            <td>성인 8,000 KRW / 어린이 500,000 KRW / 미취학 아동 1,000 KRW</td>
                        </tr>
                        <tr>
                            <td rowSpan="2">DINNER</td>
                            <td>Mon-Fri</td>
                            <td>성인 8,000 KRW / 어린이 400,000 KRW / 미취학 아동 500 KRW</td>
                        </tr>
                        <tr>
                            <td>Sat-Sun, Holiday</td>
                            <td>성인 9,000 KRW / 어린이 600,000 KRW / 미취학 아동 1,500 KRW</td>
                        </tr>
                    </table>
                    <h2>대표 메뉴</h2>
                    <Carousel effect="fade" autoplay dots={false}>
                        <div>
                            <h3 style={contentStyle}>
                                <img src="images/view_cont_info_slide_img03_1.png" alt="diningPic1" />
                            </h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>
                                <img src="images/view_cont_info_slide_img03_2.png" alt="diningPic1" />
                            </h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>
                                <img src="images/view_cont_info_slide_img03_3.png" alt="diningPic1" />
                            </h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>
                                <img src="images/view_cont_info_slide_img03_4.png" alt="diningPic1" />
                            </h3>
                        </div>
                    </Carousel>
                    <p className='gray'>※ 위 이미지는 예시 이미지로, 현실과는 많이 다릅니다. 그래도 그냥 드세요.</p>
                    <h2>추가 정보</h2>
                    <p>▶ VAT 포함된 금액입니다.</p>
                    <p>▶ 가격이 저렴한 편이지만, 최상의 퀄리티를 유지합니다.</p>
                    <p>▶ 카운터 직원에게 빅맥송을 불러주시면 무료로 이용할 수 있습니다.</p>
                    <p>▶ 레스토랑 사정에 따라 운영 시간이 변경될 수 있습니다.</p>
                    <p>▶ 문의, 예약 T.052-456-1234 / 1235 | E-MAIL. Piccolo@strato.co.kr</p>
                </div>
            </div>
        </>

    );
};

export default DiningIndex;