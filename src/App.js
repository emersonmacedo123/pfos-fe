// import logo from './logo.svg';
import './App.css';
import space_background from "./assets/images/background_space_medium.jpg";
import Container from './components/Container';
import Logo from './components/Logo'; 


function App() {

  const myStyle={
    backgroundImage: `url(${space_background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100vw',
    height:'100vh',
    backgroundClip: 'fixed'
    // position: 'fixed',
    // fontSize:'50px',
    

}

  return (
    <div className="App" style={myStyle}>
      <Logo />
      <Container />
      
      {/* <img src={primates_logo_nobg} className="App-logo" alt="logo" />
      <header className="App-header">
      
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header> */}
    
    </div>
  );
}

export default App;
