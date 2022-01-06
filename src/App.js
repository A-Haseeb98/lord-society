import './App.css';
import { Navbar, Cover, Footer, Welcome, JoinTheClub, FaqSection, RoadMap, Artist } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cover />
      <Welcome />
      <JoinTheClub />
      <RoadMap/>
      <Artist/>
      <FaqSection />
      <Footer />

    </div>
  );
}

export default App;