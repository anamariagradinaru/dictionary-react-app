import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 30px;

    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #757575;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    .slider:before {
        position: absolute;
        content: '';
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    input:checked + .slider {
        background-color: var(--purple-color);
    }

    input:focus + .slider {
        box-shadow: 0 0 1px var(--purple-color);
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }

    .dropbtn {
        background-color: transparent;
        color: var(--black-color);
        padding: 16px;
        font-size: 16px;
        border: none;
        font-weight: 700;
        border-right: 1px solid #e9e9e9;
    }

    .dropdown {
        position: relative;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: white;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }

    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        font-weight: 700;
    }

    .dropdown-content a:hover {
        color: var(--purple-color);
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }
    .search-bar {
        width: 100%;
        height: 55px;
        background-color: #f4f4f4;
        border: 1px solid transparent;
        border-radius: 25px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 24px;
        font-size: var(--black-color);
    }
    .content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }
`;

export default Container;
