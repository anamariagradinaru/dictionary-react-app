import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    margin-top: 40px;
    .content-container {
        width: 100%;
    }
    .content-container h3 {
        font-style: italic;
        font-weight: 700;
        font-size: var(--medium-text);
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
    .content-container h4 {
        margin-top: 22px;
        font-weight: 400;
        font-size: var(--normal-text);
        color: var(--gray-color);
    }
    .content-container li {
        font-weight: 400;
        color: var(--black-color);
        font-size: var(--small-text);
        margin-top: 25px;
        margin-left: 28px;
    }
    .content-container p {
        color: var(--gray-color);
        margin-left: 28px;
        font-size: var(--small-text);
        margin-top: 13px;
    }
`;

export default Container;
