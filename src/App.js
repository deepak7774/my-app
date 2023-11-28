import logo from './logo.svg';
import { Home } from './componets/pages/home/Home';
import { Footer } from './componets/pages/home/Footer';
import Header from './componets/pages/home/Header';

function App() {
  return (
    <div className="App">     
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
