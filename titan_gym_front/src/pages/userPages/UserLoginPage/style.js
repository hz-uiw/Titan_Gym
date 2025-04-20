import { css } from "@emotion/react";

export const container = css`
    width: 70rem;
    height: 70rem;
    background-color: #eee;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const logoBox = css`
    width: 20rem;

    & > img {
        width: 100%;
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
    }

    & > a > span {
        color: #0065f6;
    }
`;

export const loginButton = css`
    width: 70%;
    height: 4.5rem;
    border: 1px solid #eee;
    border-radius: 10px;
    background-color: red;
    color: #fff;
    font-size: 1.6rem;
    margin-top: 1rem;
`;