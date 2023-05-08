import {Routes, Route} from "react-router-dom"

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Navigate to={Homepage}/>
      </Routes>
    </>
  );
}

export default App;
