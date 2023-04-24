import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/navbar";
import Firstcarousel from "./components/carousel/carousel";
function App() {
  return (
    <div className="App">
      {
        <veiw>
          <NavBar />
          <Firstcarousel />
          {/* <SplitScreen /> */}
          {/* <Forms /> */}
        </veiw>
      }
    </div>
  );
}

export default App;
