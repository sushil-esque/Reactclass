import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Mainpage from "./pages/home/Mainpage";
import Sum from "./components/sum";
import Difference from "./components/Difference";

function App() {

  return (
    <>
    <div>sum is <Sum a={1} b={2} /> </div>
    <div>Difference is <Difference a={5} b={3}/></div>
      {/* <Header />
      <Mainpage />
      <Footer /> */}
    </>
  );
}

export default App;
