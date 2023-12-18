import "./pages/Style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routing } from "./components/Routing";
import { Footer } from "./pages/home/Footer";
import Header from "./components/forntFiles/Header3";


function App() {
  return (
    <>
      <div className="App">
        <Header/>
        <Routing />
        <Footer/>       

   
      </div>
    </>
  );
}

export default App;
