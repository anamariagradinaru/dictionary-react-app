import Container from './index.styled';
import { ReactComponent as IconSearch } from '../../../../src/assets/images/icon-search.svg';
import { ReactComponent as IconLogo } from '../../../assets/images/logo.svg';
import { ReactComponent as IconMoon } from '../../../assets/images/icon-moon.svg';
import { ReactComponent as IconArrow } from '../../../assets/images/icon-arrow-down.svg';

const Component = () => {
    return (
        <Container className="container-content">
            <div class="content">
                <IconLogo />
                <div class="dropdown">
                    <button class="dropbtn">
                        Sans Serif <IconArrow />
                    </button>
                    <div class="dropdown-content">
                        <a href="1">Link 1</a>
                        <a href="2">Link 2</a>
                        <a href="3">Link 3</a>
                    </div>
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                    </label>
                    <IconMoon />
                </div>
            </div>
            <div class="search-bar">
                keyboard <IconSearch />
            </div>
        </Container>
    );
};

export default Component;
