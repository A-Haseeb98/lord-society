import logo from './logo.svg';
import './App.css';
import { Navbar, Cover, Footer, Welcome, JoinTheClub, Faq_section, RoadMap } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cover />
      <Welcome />
      <JoinTheClub />
      <RoadMap/>
      <Faq_section />
      <Footer />
    </div>
  );
}

export default App;