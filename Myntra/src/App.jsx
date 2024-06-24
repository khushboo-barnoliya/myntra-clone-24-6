
import "../src/components/css/App.css";
import MyntraProvider from "./data/myntraStore";
import Home from "./components/Home";
import { useEffect } from "react";

function App() {
  return (
    <>
      <MyntraProvider>
        <div className="container-fluid p-0">
          <Home />
        </div>
      </MyntraProvider>
    </>
  )
}

export default App
