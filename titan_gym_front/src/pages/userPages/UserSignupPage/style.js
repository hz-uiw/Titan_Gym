import { css } from "@emotion/react";

export const container = css`
    width: 70rem;
    height: 75rem;
    border: 5px solid red;
    margin: 5rem auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const logoBox = css`
    width: 20rem;
    height: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
        width: 100%;
        object-fit: cover;
    }
`;

export const userFormContainer = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const userForm = css`
    width: 100%;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;

export const textInput = css`
    width: 70%;
    height: 4.5rem;
    padding: 0 2rem;
    box-sizing: border-box;
    border: 1px solid #eee;
    border-radius: 10px;
`;

export const genderToggle = css`
    width: 70%;
    height: 4.5rem;
    margin-top: 1rem;
    display: flex;
    gap: 1.2rem;

    button {
        width: 100%;
        height: 100%;
        font-size: 1.6rem;
        /* padding: 0.8rem 2.4rem; */
        border: 2px solid #fff;
        border-radius: 1rem;
        background-color: #fff;
        color: #555;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    button.active {
        background-color: #555;
        color: #fff;
        border-color: #555;
    }

    button:hover {
        background-color: #eee;
    }
`;

export const joinGroup = css`
    width: 70%;
    height: 4.5rem;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 1.4rem;
    gap: 1.2rem;
    text-decoration: none;

    & > span, & > a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #eeeeee;
    }

    & > a > span {
        color: #0065f6;
    }
`;

export const joinButton = css`
    width: 70%;
    height: 4.5rem;
    border: 1px solid red;
    border-radius: 10px;
    background-color: red;
    color: #eeeeee;
    font-size: 1.6rem;
    margin-top: 1rem;
    cursor: pointer;
`;