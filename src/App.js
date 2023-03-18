import './App.css';
import LogoRotating from './components/Logo';
import NavbarMain from './components/NavbarMain';
import Section1 from './components/Section1';
import HomeMain from './components/HomeMain';
import Container from 'react-bootstrap/Container';
import BandHistoryMain from './components/BandHistoryMain';
import { MembersMain } from './components/MembersMain';
import BigSpace from './components/BigSpace';


function App() {

  return (
    <div className="App">
      <NavbarMain />
      <Container>
        <HomeMain />
          <BigSpace />
        <MembersMain />
        <BandHistoryMain />
          <BigSpace />
        <Section1 />
        <LogoRotating />
        
      </Container>

    </div>
  );
}

export default App;
