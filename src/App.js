// import logo from './logo.svg';
import './App.css';
import LogoRotating from './components/Logo'; 
import NavbarMain from './components/NavbarMain';
import LorenBigText from './components/LorenBigText';
import Section1 from './components/Section1';

function App() {

  return (
    <div className="App">
      <NavbarMain />
      <LogoRotating />
      <LorenBigText />
      <LorenBigText />
      <LorenBigText />
      <Section1 />
      
    </div>
  );
}

export default App;
