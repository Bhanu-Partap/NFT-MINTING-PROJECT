import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Routing from "./components/Routing";
import "./App.css";
// import Allstates from "./Context/Allstates";


function App() {
  return (
    <>
      {/* <Allstates> */}
        <Routing />
      {/* </Allstates> */}
    </>
  );
}

export default App;
