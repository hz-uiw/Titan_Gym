/**@jsxImportSource @emotion/react */
import * as s from './style';
import React, { useState } from 'react';
import logo from '../../../assets/titan_gym_logo_remove.png'
import { Link } from 'react-router-dom';

function UserSignupPage(props) {

    const [gender, setGender] = useState("male");

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
                    <div css={s.userForm}>
                        <input css={s.textInput} type="text" placeholder='닉네임' />
                    </div>
                    <div css={s.userForm}>
                        <input css={s.textInput} type="text" placeholder='이름' />
                    </div>
                    <div css={s.userForm}>
                        <input css={s.textInput} type="text" placeholder='연락처' />
                    </div>
                    <div css={s.userForm}>
                        <input css={s.textInput} type="text" placeholder='이메일' />
                    </div>
                    <div css={s.genderToggle}>
                        <button
                            type="button"
                            className={gender === "male" ? "active" : ""}
                            onClick={() => setGender("male")}
                        >
                            남
                        </button>
                        <button
                            type="button"
                            className={gender === "female" ? "active" : ""}
                            onClick={() => setGender("female")}
                        >
                            여
                        </button>
                    </div>
                </div>
                <div css={s.joinGroup}>
                    <span>계정이 있으신가요?</span> 
                    <Link to='/login'><span>로그인</span></Link>
                </div>
                <button css={s.joinButton}>회원가입</button>
            </div>
        </>
    );
}

export default UserSignupPage;