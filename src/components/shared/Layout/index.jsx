import Container from './index.styled';

const Component = ({ children }) => {
    return (
        <Container>
            <div className="layout__wrapper">{children}</div>
        </Container>
    );
};

export default Component;
