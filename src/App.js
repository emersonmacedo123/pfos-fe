import './App.css';
import NavbarMain from './components/NavbarMain';
import HomeMain from './components/HomeMain';
import Container from 'react-bootstrap/Container';
import BandHistoryMain from './components/BandHistoryMain';
import { MembersMain } from './components/MembersMain';
import BigSpace from './components/BigSpace';
import InstagramContainer from './components/InstagramContainer';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <NavbarMain />
      <Container>
        <HomeMain />
        <InstagramContainer />
        <BigSpace />
        <MembersMain />
        <BandHistoryMain />
        <BigSpace />
      </Container>
      <Footer />

    </div>
  );
}

export default App;
