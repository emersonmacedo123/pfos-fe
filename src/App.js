// import logo from './logo.svg';
import './App.css';
import LogoRotating from './components/Logo';
import NavbarMain from './components/NavbarMain';
import LorenBigText from './components/LorenBigText';
import Section1 from './components/Section1';
import HomeMain from './components/HomeMain';
import Container from 'react-bootstrap/Container';


function App() {

  return (
    <div className="App">
      <NavbarMain />
      <Container>
        <HomeMain />
        <LorenBigText />
        <LorenBigText />
        <LorenBigText />
        <Section1 />
        <LogoRotating />
      </Container>

    </div>
  );
}

export default App;
