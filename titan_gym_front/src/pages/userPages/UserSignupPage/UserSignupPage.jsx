/**@jsxImportSource @emotion/react */
import * as s from './style';
import React, { useState } from 'react';
import logo from '../../../assets/titan_gym_logo_remove.png'
import { Link, useNavigate } from 'react-router-dom';
import { useJoinMutation } from '../../../mutations/authMutation';
import ValidInput from '../../../components/ValidInput/ValidInput';

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

    const isErrors = () => {
        const isEmpty = Object.values(inputValue).map(value => !!value).includes(false); 
        const isValid = Object.values(inputValidError).includes(true);                   

        return isEmpty || isValid;
    }

    const handleInputOnChange = (e) => {
        setInputValue(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    const handlePasswordOnFocus = () => {
        setInputValue(prev => ({
            ...prev,
            password: "",
            passwordCheck: "",
        }));
    }


    const handleJoinOnClick = () => {
        if (isErrors()) {
            alert("가입 정보를 다시 확인해주세요.");
            return;
        }

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
            navigate("/login");
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
                    <ValidInput
                        type={"text"}
                        placeholder={"아이디"}
                        name={"username"}
                        value={inputValue.username}
                        onChange={handleInputOnChange}
                        regexp={/^[a-zA-Z][a-zA-Z0-9_]{3,15}$/} // 4~16자(영문, 숫자, 언더바)
                        errorMessage={"사용할 수 없는 사용자 이름입니다."}
                        inputValidError={inputValidError}
                        setInputValidError={setInputValidError} 
                    />
                    <ValidInput
                        type={"password"}
                        placeholder={"비밀번호"}
                        name={"password"}
                        value={inputValue.password}
                        onChange={handleInputOnChange}
                        onFocus={handlePasswordOnFocus}
                        regexp={/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/} 
                        // 8~16자(소문자, 대문자, 숫자, 지정된 특수문자 1개 이상 포함)
                        errorMessage={"비밀번호는 소문자와 대문자, 숫자 그리고 특수문자를 포함한 8자 이상 16자 이하여야 합니다."}
                        inputValidError={inputValidError}
                        setInputValidError={setInputValidError} 
                    />
                    <ValidInput
                        type={"password"}
                        placeholder={"비밀번호 확인"}
                        name={"passwordCheck"}
                        value={inputValue.passwordCheck}
                        onChange={handleInputOnChange}
                        regexp={new RegExp(`^${inputValue.password}$`)} 
                        // 8~16자(소문자, 대문자, 숫자, 지정된 특수문자 1개 이상 포함)
                        errorMessage={"비밀번호가 일치하지 않습니다."}
                        inputValidError={inputValidError}
                        setInputValidError={setInputValidError} 
                    />
                    <ValidInput
                        type={"text"}
                        placeholder={"이름"}
                        name={"name"}
                        value={inputValue.name}
                        onChange={handleInputOnChange}
                        regexp={/^[A-Za-z가-힣]+$/} // 한글 및 영어 이름
                        errorMessage={"이름에는 숫자, 특수문자는 포함할 수 없습니다"}
                        inputValidError={inputValidError}
                        setInputValidError={setInputValidError} 
                    />
                    <ValidInput
                        type={"text"}
                        placeholder={"연락처"}
                        name={"phoneNumber"}
                        value={inputValue.phoneNumber}
                        onChange={handleInputOnChange}
                        regexp={/^[0-9]+$/} 
                        errorMessage={"숫자만 입력하실 수 있습니다."}
                        inputValidError={inputValidError}
                        setInputValidError={setInputValidError} 
                    />
                    <ValidInput
                        type={"text"}
                        placeholder={"이메일"}
                        name={"email"}
                        value={inputValue.email}
                        onChange={handleInputOnChange}
                        regexp={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
                        errorMessage={"올바른 이메일을 입력하세요."}
                        inputValidError={inputValidError}
                        setInputValidError={setInputValidError} 
                    />
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
                <div css={s.loginGroup}>
                    <span>계정이 있으신가요?</span> 
                    <Link to='/login'><span>로그인</span></Link>
                </div>
                <button css={s.joinButton} onClick={handleJoinOnClick} >회원가입</button>
            </div>
        </>
    );
}

export default UserSignupPage;