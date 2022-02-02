import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Features from './Features Section/Features';
import Footer from './Footer Section/Footer';
import JumboSection from './Jumbo Section/JumboSection';
import Resturent from './Resturent in your pocket/Resturent'

function App() {
  return (
    <div className="App">
    <JumboSection />
    <Features />
    <Resturent />
    <Footer />
    </div>
  );
}

export default App;

