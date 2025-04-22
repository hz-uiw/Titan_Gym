/**@jsxImportSource @emotion/react */
import * as s from './style';
import React, { useState } from 'react';
import logo from '../../../assets/titan_gym_logo_remove.png'
import { Link } from 'react-router-dom';
import { useJoinMutation } from '../../../mutations/authMutation';

function UserSignupPage(props) {
    const [gender, setGender] = useState("male");
    const joinMutation = useJoinMutation();

    const [ inputValue, setInputValue ] = useState({
        username: "",
        password: "",
        passwordCheck: "",
        email: "",
    });

    const [ inputValidError, setInputValidError ] = useState({
        username: false,
        email: false,
        password: false,
        passwordCheck: false,
    });


    const handleJoinOnClick = () => {
        /**
         * 비어있는 항목 / 유효성 검사 코드란
         */
        joinMutation.mutateAsync({ 
            username: inputValue.username, 
            email: inputValue.email,
            password: inputValue.password,
        }).then(response => {
            console.log(response);
            alert("가입해 주셔서 감사합니다.");
            navigate(`/login?username=${response.data.username}`);
        }).catch(error => {
            if(error.status === 400) {
                setInputValidError(prev => ({
                    ...prev,
                    username: true,
                }));
            }
        })
    }
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
                        <input css={s.textInput} type="password" placeholder='비밀번호 확인' />
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
                <button css={s.joinButton} onClick={handleJoinOnClick} >회원가입</button>
            </div>
        </>
    );
}

export default UserSignupPage;