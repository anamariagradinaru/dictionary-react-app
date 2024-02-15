import Container from './index.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Component = () => {
    return (
        <Container className="container-content">
            <FontAwesomeIcon icon="fa-thin fa-book" />
            <button>Click here</button>

            <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
            </label>
            <div>
                <div>search bar</div>
            </div>
        </Container>
    );
};

export default Component;
