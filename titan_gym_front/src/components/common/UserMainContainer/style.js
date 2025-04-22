import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    box-sizing: border-box;
    padding: 1.5rem 3rem;
    height: 100%;
    overflow: scroll;
    background-color: #0f0f0f;
    `;

export const logoContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    
    & > a {
        width: 15rem;

        & > img {
            width: 100%;
        }
    }
`;

export const logInfo = css`
    margin-bottom: 1.5rem;
    & > span {
        color: #fff;
        font-size: 1.2rem;
        margin: 0 0.2rem;
    }

    & > span:nth-of-type(1) {
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }

    & > span:nth-of-type(2) {
        margin-right: 0;
    }
    
    & > span:nth-of-type(3) {
        margin-left: 0;
        margin-right: 0.5rem;
    }

    & > span:nth-of-type(4) {
        margin-right: 1rem;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const header = css`
    width: 100%;
    height: 6rem;
    background-color: red;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const navContainer = css`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
        width: 100%;
        height: 100%;
    }

    & > div > a {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.6rem;
        font-weight: 600;
        text-decoration: none;

        &:hover {
            color: #fff;
        }
    }
`;

