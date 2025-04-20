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
`;