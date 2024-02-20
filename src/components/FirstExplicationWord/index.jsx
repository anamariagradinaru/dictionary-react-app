import Container from './index.styled';

const Component = () => {
    return (
        <Container>
            <div className="content-container">
                <div className="border-container">
                    <h3>noun</h3>
                    <hr className="border"></hr>
                </div>

                <h4>Meaning</h4>
                <ul>
                    <li>
                        (etc.) A set of keys used to operate a typewriter,
                        computer etc.
                    </li>
                    <li>
                        A component of many instruments including the piano,
                        organ, and harpsichord consisting of usually black and
                        white keys that cause different tones to be produced
                        when struck.
                    </li>
                    <li>
                        A device with keys of a musical keyboard, used to
                        control electronic sound-producing devices which may be
                        built into or separate from the keyboard device.
                    </li>
                </ul>
                <div className="text-container">
                    <h2>Synonyms</h2>
                    <p>electronic keyboard</p>
                </div>
            </div>
        </Container>
    );
};
export default Component;
