import "./App.css";
import LeftSidebar from "./Components/LeftSidebar";
import RightSidebar from "./Components/RightSidebar";
import { useState } from "react";

function App() {
  let [things, setthings] = useState([]);

  return (
    <div className="App">
      <div className="main">
        <LeftSidebar SetThings={setthings} />
        <RightSidebar Things={things} />
      </div>
    </div>
  );
}

export default App;
