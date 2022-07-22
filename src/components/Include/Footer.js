import React from 'react';

const Footer = () => {
    return (
        <footer >
            <div>
                <ul className="footerNotice">
                    <li>고객센터</li>
                    <li>이용약관</li>
                    <li>개인정보처리방침</li>
                    <li>채용문의</li>
                    <li>공지사항</li>
                </ul>
                <ul className="footerInfo">
                    <li>STRATO HOTEL : 울산 남구 삼산동 STRATO HOTEL</li>
                    <li className="footerTel">
                        <span>대표이사 : 손민영</span>
                        <div>
                            <span>Tel</span>
                            <div className="telNums">
                                <span>02-123-4567(호텔문의)</span>
                                <span>03-456-7890(웨딩문의)</span>
                                <span>04-987-5432(연회 및 단체 행사 문의)</span>
                            </div>
                        </div>
                    </li>
                    <li>copyright(c)All rights resolved</li>
                    <li>Every tel number, name, address and any other information is false. And we don't have any rights for every picture on the website.</li>
                </ul>
            </div>
            <h2 id="footerLogo">STRATO</h2>
        </footer>
    );
};

export default Footer;