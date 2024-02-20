import Container from './index.styled';
import { ReactComponent as IconButton } from '../../assets/images/icon-play.svg';

const Component = () => {
    return (
        <Container>
            <div className="title-container">
                <h1>keyboard</h1>
                <h2>{`/ˈkiːbɔːd/`}</h2>
            </div>
            <div className="title-btn">
                <IconButton />
            </div>
        </Container>
    );
};

export default Component;
