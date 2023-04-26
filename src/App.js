import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/navbar";
import UncontrolledExample from "./components/carousel/carousel";
import Randomtext from "./components/Randomtext";
import Footer from "./components/footer/footer";
import Map from "./components/map";

export default function App() {
  return (
    <div className="App">
      {
        <>
          <NavBar />
          <UncontrolledExample />
          <Randomtext />
          {/* <Map /> */}
          {/* <Randomtext /> */}
          {/* <Forms />  */}
          <Footer />
          {/* <SplitScreen /> */}
        </>
      }
    </div>
  );
}
