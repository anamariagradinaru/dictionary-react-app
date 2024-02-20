import FirstExplicationWord from './components/FirstExplicationWord';
import SecondExplicationWord from './components/SecondExplicationWord';
import Navigation from './components/shared/Navigation';
import './App.css';
import Layout from './components/shared/Layout';
import TitleText from './components/TitleText';

function App() {
    return (
        <Layout>
            <Navigation />
            <TitleText />
            <FirstExplicationWord />
            <SecondExplicationWord />
        </Layout>
    );
}

export default App;
