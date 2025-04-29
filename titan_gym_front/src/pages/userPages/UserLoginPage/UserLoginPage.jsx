/**@jsxImportSource @emotion/react */
import * as s from './style';
import React, { useState } from 'react';
import logo from '../../../assets/titan_gym_logo_remove.png'
import { Link, useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useLoginMutation } from '../../../mutations/authMutation';
import Swal from 'sweetalert2';
import { setTokenLocalStorage } from '../../../configs/axiosConfig';

function UserLoginPage(props) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const loginMutation = useLoginMutation();

    const [inputValue, setInputValue] = useState({
        username: "",
        password: "",
    });

    const handleInputOnChang = (e) => {
        setInputValue(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    // input창에 하나라도 값이 비어있는지 확인
    const isEmpty = () => {
        const IsEmptyInBox = Object.values(inputValue).map(value => !!value).includes(false);

        return IsEmptyInBox;
    }

    const handleLoginOnClick = async () => {
        if(isEmpty()) {     // input 태그에 값이 하나라도 비어있으면 조건문 실행
            await Swal.fire({
                title: '로그인 실패',
                text: '사용자 정보를 입력해주세요!',
                confirmButtonText: '확인',
                confirmButtonColor: "#e22323"
            })
            return;
        }

        try {
            const response = await loginMutation.mutateAsync(inputValue);
            const tokenName = response.data.name;
            const accessToken = response.data.token;
            setTokenLocalStorage(tokenName, accessToken);
            await Swal.fire({
                icon: "success",
                text: "로그인 성공",
                timer: 1000,
                position: "center",
                showConfirmButton: false,
            });
            await queryClient.invalidateQueries({queryKey: ["userMyQery"]});
            navigate("/")
        } catch (error) {
            if(error.response.status === 401) {
                const result = await Swal.fire({
                    title: '계정 활성화',
                    text: '계정 활성화를 하려면 등록하신 메일을 통해 계정 인증을 하세요. 다시 메일 전송이 필요하면 전송버튼을 클릭하세요.',
                    confirmButtonText: '전송',
                    confirmButtonColor: "#2389e2",
                    showCancelButton: true,
                    cancelButtonText: '취소',
                    cancelButtonColor: "#999999"
                });
                if(result.isConfirmed) {
                    await sendAuthMailMutation.mutateAsync(inputValue.username);
                    await Swal.fire({       // function fire<T = any>(options: SweetAlertOptions): Promise<SweetAlertResult<Awaited<T>>> >> Promise 이기 때문에 await 걸어줘야함
                        title: '메일 전송 완료',
                        confirmButtonText: '확인',
                        confirmButtonColor: "#2389e2"
                    });
                };
            } else {
                await Swal.fire({
                    title: '로그인 실패',
                    text: '사용자 정보를 다시 확인해주세요!',
                    confirmButtonText: '확인',
                    confirmButtonColor: "#e22323"
                });
            };
        }
    }

    return (
        <>
            <div css={s.container}>
                <div css={s.logoBox}>
                    <img src={logo} alt="" />
                </div>
                <div css={s.userFormContainer}>
                    <div css={s.userForm}>
                        <input css={s.textInput} type="text" placeholder='아이디' 
                        name="username"
                        value={inputValue.username}
                        onChange={handleInputOnChang} />
                    </div>
                    <div css={s.userForm}>
                        <input css={s.textInput} type="password" placeholder='비밀번호' 
                        name="password"
                        value={inputValue.password}
                        onChange={handleInputOnChang} />
                    </div>
                </div>
                <div css={s.joinGroup}>
                    <span>계정이 없으신가요?</span> 
                    <Link to='/join'><span>가입하기</span></Link>
                </div>
                <button css={s.loginButton} onClick={handleLoginOnClick}>로그인</button>
            </div>
        </>
    );
}

export default UserLoginPage;