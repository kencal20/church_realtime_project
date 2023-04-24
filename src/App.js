import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/navbar";
import UncontrolledExample from "./components/carousel/carousel";
import Randomtext from "./components/Randomtext";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="App">
      {
        <>
          <NavBar />
          <UncontrolledExample />
          <Randomtext />
          <Randomtext />
          <Footer />
          {/* <Forms /> */}
          {/* <SplitScreen /> */}
        </>
      }
    </div>
  );
}

export default App;
