import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;

    .content-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }
    .content-container h3 {
        font-size: var(--medium-text);
        font-style: italic;
        font-weight: 700;
        color: var(--black-color);
    }
    .content-container h4 {
        margin-top: 22px;
        font-weight: 400;
        font-size: var(--normal-text);
        color: var(--gray-color);
    }
    .content-container li {
        padding: 8px;
        font-size: var(--small-text);
        color: var(--black-color);
        margin-left: 28px;
    }
    .text-container {
        display: flex;
        gap: 22px;
        margin-top: 65px;
    }
    .text-container h2 {
        color: var(--gray-color);
        font-weight: 400;
        font-size: var(--normal-text);
    }
    .text-container p {
        color: var(--purple-color);
        font-size: var(--normal-text);
        font-weight: 700;
    }
    .border-container {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .border {
        border: 1px solid #e9e9e9;
        width: 100%;
    }
`;

export default Container;
