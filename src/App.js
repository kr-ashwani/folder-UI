import React, { useEffect } from "react";
import "./App.css";
import FileStructure from "./components/FolderStructure/FolderStructure";

function App() {
  useEffect(() => {
    function setVh() {
      let root = document.querySelector(":root");
      let vh = window.innerHeight * 0.01;
      root.style.setProperty("--vh", `${vh}px`);
    }
    setVh();

    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);
  return (
    <div className="App">
      <h2>Folder UI</h2>
      <FileStructure />
    </div>
  );
}

export default App;
