import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    
    @media only screen and (max-width: 1550px) {
        html {
            font-size: 14px;
        }
    }
    @media only screen and (max-width: 1200px) {
        html {
            font-size: 12px;
        }
    }
    @media only screen and (max-width: 1050px) {
        html {
            font-size: 10px;
        }
    }
    
    @font-face {
        font-family: "Martel";
        src: url("./fonts/NotoSansKR-Black.otf");
    }
    body {
        font-family: "Martel";
        background-color: #e0e5eb;
        color: #202730;
    }
`;

export const Container = styled.div`
    background-color: #333e4d;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%23202730' fill-opacity='0.83' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E");
    width: 50%;
    top: 30%;
    left: 50%;
    position: absolute;
    box-shadow: 10px 10px 0px #667c99;
    transform: translate(-50%, -50%);
    display: flex;
    padding: 2.5rem 2rem;
    border-radius: 4px;

    @media only screen and (max-width: 1400px) {
        width: 60%;
    }
    @media only screen and (max-width: 1200px) {
        width: 70%;
    }
    @media only screen and (max-width: 1050px) {
        width: 75%;
    }
    @media only screen and (max-width: 700px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: none;
    }
`;

export const Title = styled.div`
    width: 60%;
    user-select: none;
    @media only screen and (max-width: 700px) {
        width: 100%;
    }
`;

export const Login = styled.div`
    width: 40%;
    @media only screen and (max-width: 700px) {
        width: 100%;
    }
`;

export const LoginContainer = styled.form`
    padding: 1.5rem 1.2rem 1.8rem 1.2rem;
    border-radius: 4px;
    background-color: #e0e5eb;
    display: flex;
    flex-direction: column;
    margin: 1.8rem 0rem;
    opacity: 0.8;
`;

export const Input = styled.input`
    border: none;
    border-bottom: 2.5px solid black;
    background-color: transparent;
    outline: none;
    font-size: 1.4rem;
    margin-top: 1.8rem;
    transition: 250ms ease-out;

    &:focus {
        border: none;
        border-bottom: 2.5px solid #fc8f00;
        user-select: none;
    }

    &::placeholder {
        color: #202730;
    }
`;

export const SubmitBtn = styled.button`
    font-weight: 900;
    margin: 0rem 0.3rem;
    width: 33.33%;
    margin-left: 66.66%;
    color: #e0e5eb;
    background-color: #202730;
    border: none;
    outline: none;
    border-radius: 4px;
    padding: 0.5rem 0.5rem;
    font-size: 1.3rem;
    margin-top: 1rem;
    cursor: pointer;
    backface-visibility: hidden;
    box-shadow: 5px 5px 0px #667c99;

    &:hover {
        transition-duration: 200ms;
        transform: translate(-2px, -2px);
        box-shadow: 9px 9px 0px #667c99;
    }

    &:active {
        transition-duration: 100ms;
        transform: translate(2px, 2px);
        box-shadow: 1px 1px 0px #667c99;
    }
`;

export const TitleTitle = styled.div`
    font-size: 4.9rem;
    text-align: center;

    color: #f0f2f5;
    text-decoration: underline;
    width: 100%;

    @media only screen and (max-width: 700px) {
        font-size: 3.5rem;
    }
`;

export const TitleText = styled.div`
    font-size: 2.2rem;
    text-align: center;
    width: 60%;
    margin: 0 auto;
    color: #d1d8e0;
    @media only screen and (max-width: 700px) {
        font-size: 2rem;
    }
`;
