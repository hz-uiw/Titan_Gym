/**@jsxImportSource @emotion/react */
import * as s from './style';
import React, { useState } from 'react';
import logo from '../../../assets/titan_gym_logo_remove.png'
import { Link, useNavigate } from 'react-router-dom';
import { useJoinMutation } from '../../../mutations/authMutation';

function UserSignupPage(props) {
    const [gender, setGender] = useState("male");
    const navigate = useNavigate();
    const joinMutation = useJoinMutation();

    const [ inputValue, setInputValue ] = useState({
        username: "",
        password: "",
        passwordCheck: "",
        name: "",
        phoneNumber: "",
        email: "",
    });

    const [ inputValidError, setInputValidError ] = useState({
        username: false,
        password: false,
        passwordCheck: false,
        name: false,
        phoneNumber: false,
        email: false,
    });

    const handleInputOnChange = (e) => {
        setInputValue(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }


    const handleJoinOnClick = () => {
        /**
         * 비어있는 항목 / 유효성 검사 코드란
         */
        joinMutation.mutateAsync({ 
            username: inputValue.username, 
            password: inputValue.password,
            email: inputValue.email,
            name: inputValue.name,
            phoneNumber: inputValue.phoneNumber,
            gender: gender,
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
                        <input css={s.textInput} 
                        onChange={handleInputOnChange}
                            type="text" 
                            placeholder='아이디' 
                            name='username' 
                            value={inputValue.username} />
                    </div>
                    <div css={s.userForm}>
                        <input css={s.textInput} 
                        onChange={handleInputOnChange}
                            type="password" 
                            placeholder='비밀번호' 
                            name='password' 
                            value={inputValue.password} />
                    </div>
                    <div css={s.userForm}>
                        <input css={s.textInput} 
                        onChange={handleInputOnChange}
                            type="password"
                            placeholder='비밀번호 확인' 
                            name='passwordCheck'
                            value={inputValue.passwordCheck} />
                    </div>
                    <div css={s.userForm}>
                        <input css={s.textInput}
                        onChange={handleInputOnChange} 
                            type="text" 
                            placeholder='이름' 
                            name='name' 
                            value={inputValue.name} />
                    </div>
                    <div css={s.userForm}>
                        <input css={s.textInput} 
                        onChange={handleInputOnChange}
                            type="text" 
                            placeholder='연락처' 
                            name='phoneNumber' 
                            value={inputValue.phoneNumber} />
                    </div>
                    <div css={s.userForm}>
                        <input css={s.textInput} 
                        onChange={handleInputOnChange}
                            type="text" 
                            placeholder='이메일' 
                            name='email' 
                            value={inputValue.email}/>
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