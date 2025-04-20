/**@jsxImportSource @emotion/react */
import { Link, useNavigate } from 'react-router-dom';
import * as s from './style';
import React from 'react';
import headerImg from '../../../assets/titan_gym_header_logo.png'

function UserMainContainer({children}) {

    return (
        <div css={s.container}>
                <div css={s.logoContainer}>
                    <Link to="/home" css={s.logoImg}><img src={headerImg} alt="" /></Link>
                    <div css={s.logInfo}>
                        <span css={s.user}>권민창</span>
                        <span css={s.role}>관리자</span>
                        <span>님 반갑습니다.</span>
                        <span>로그아웃</span>
                    </div>
                </div>
            <div css={s.header}>
                <div css={s.navContainer}>
                    <div><Link to="/about">브랜드</Link></div>
                    <div><Link to="/membership">멤버십</Link></div>
                    <div><Link to="/prsnltrain">PT+</Link></div>
                    <div><Link to="/trainer">트레이너</Link></div>
                    <div><Link to="/review">리뷰</Link></div>
                    <div><Link to="/news">NEWS</Link></div>
                </div>
            </div>
            {children}
        </div>
    );
}

export default UserMainContainer;