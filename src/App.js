import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import CoinSelector from './components/CoinSelector';


function App() {
  return (
    <div className="App">
      <header className="">
        <NavBar />
      </header>
      <section>
        <CoinSelector />
      </section>
      <Footer />
    </div>
  );
}

export default App;
