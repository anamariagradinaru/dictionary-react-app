import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    margin-top: 45px;
    .title-container {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .title-container h1 {
        color: var(--black-color);
        font-size: var(--large-text);
        font-weight: 700;
    }
    .title-container h2 {
        color: var(--purple-color);
        font-size: var(--medium-text);
        font-weight: 400;
    }
`;

export default Container;
