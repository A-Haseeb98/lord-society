import './App.css';
import { Navbar, Cover, Footer, Welcome, JoinTheClub, FaqSection, RoadMap } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cover />
      <Welcome />
      <JoinTheClub />
      <RoadMap/>
      <FaqSection />
      <Footer />
    </div>
  );
}

export default App;