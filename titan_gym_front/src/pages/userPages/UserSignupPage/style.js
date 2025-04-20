import { css } from "@emotion/react";

export const container = css`
    width: 70rem;
    height: 70rem;
    border: 5px solid red;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #eeee;
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
        border: 2px solid #ccc;
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

    & > span, & > a {
        display: flex;
        justify-content: center;
        align-items: center;

    }

    & > a > span{
        color: #0065f6;
        text-decoration: none;
    }
`;