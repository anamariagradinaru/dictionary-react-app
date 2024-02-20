import Container from './index.styled';

const Component = () => {
    return (
        <Container>
            <div className="content-container">
                <div className="border-container">
                    <h3>verb</h3>
                    <hr className="border"></hr>
                </div>

                <h4>Meaning</h4>
                <ul>
                    <li>
                        To type on a computer keyboard. “Keyboarding is the part
                        of this job I hate the most.”
                    </li>
                </ul>
                <p>Keyboarding is the part of this job I hate the most</p>
            </div>
        </Container>
    );
};

export default Component;
