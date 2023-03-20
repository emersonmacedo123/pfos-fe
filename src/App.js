import './App.css';
import LogoRotating from './components/Logo';
import NavbarMain from './components/NavbarMain';
import Section1 from './components/Section1';
import HomeMain from './components/HomeMain';
import Container from 'react-bootstrap/Container';
import BandHistoryMain from './components/BandHistoryMain';
import { MembersMain } from './components/MembersMain';
import BigSpace from './components/BigSpace';
import InstagramTest from './components/InstagramTest';
import InstagramContainer from './components/InstagramContainer';

function App() {

  const My_token = '//add the token here'

  return (
    <div className="App">
      <NavbarMain />
      <Container>
        <HomeMain />
        <InstagramContainer />
        {/* <InstagramTest token={My_token} limit={9} /> */}
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
