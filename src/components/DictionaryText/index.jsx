import Container from './index.styled';

const Component = () => {
    return (
        <Container>
            <div className="title-container">
                <h1>Keyboard</h1>
                <button></button>
                <h2>{`/ˈkiːbɔːd/`}</h2>
            </div>
            <h3>noun</h3>
            <p>
                the row or set of keys on a piano, organ, or the like: I was
                playing piano before my feet could reach the pedals or my
                fingers could cover a chord on the keyboard. a set of keys,
                usually arranged in tiers, for operating a typewriter, computer,
                cash register, or the like, or a digital representation of the
                same on a touchscreen used to type on a device such as a
                smartphone or tablet: I spilled coffee on my keyboard, and now
                the return key sticks so my documents are full of extra line
                breaks.
            </p>
            <h3>verb</h3>
            <p>
                To type on a computer keyboard. “Keyboarding is the part of this
                job I hate the most.”
            </p>
        </Container>
    );
};
export default Component;
