/**@jsxImportSource @emotion/react */
import * as s from './style';
import React from 'react';
import logo from '../../../assets/titan_gym_logo_remove.png'
import { Link } from 'react-router-dom';

function UserLoginPage(props) {
    return (
        <>
            <div css={s.container}>
                <div css={s.logoBox}>
                    <img src={logo} alt="" />
                </div>
                <div css={s.userFormContainer}>
                    <div css={s.userForm}>
                        <input css={s.textInput} type="text" placeholder='아이디' />
                    </div>
                    <div css={s.userForm}>
                        <input css={s.textInput} type="password" placeholder='비밀번호' />
                    </div>
                </div>
                <div css={s.joinGroup}>
                    <p>계정이 없으신가요?</p> 
                    <Link to='/join'><span>가입하기</span></Link>
                </div>
                <button css={s.loginButton}>로그인</button>
            </div>
        </>
    );
}

export default UserLoginPage;