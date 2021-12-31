import logo from './logo.svg';
import './App.css';
import { Navbar,Cover, Footer, Welcome, JoinTheClub } from './components';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Cover/>
     <Welcome/>
     <JoinTheClub/>

     <Footer/>

    </div>
  );
}

export default App;