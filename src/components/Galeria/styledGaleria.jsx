import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    margin-top: -20vh;
    padding: 0vh 10vw;
`;

export const ImagesContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;

        img {
            height: auto;
            width: 100%;
            object-fit: cover;
            cursor: pointer;
        }
    }

    &.img4 div {
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-left: -6vw;

        img {
            height: 38.5vh; /* elas sao menores que as outras :< */
            width: auto;
        }
    }
`;

export const TextContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 4vw;

    h2 {
        color: rgb(119, 16, 198);
        font-size: 40px;
        margin-bottom: 4vh;
        font-weight: bold;
    }

    h3 {
        color: rgb(119, 16, 198);
        font-size: 30px;
        margin-bottom: 2vh;
        font-weight: bold;
    }

    p {
        font-size: 18px;
        line-height: 1.2;
        margin-bottom: 4vh;
        text-align: justify;
    }

    &.img2 {
        text-align: center;
    }

    &.img3 {
        animation: ${slideIn} 1s forwards;
    }
`;
