import React from "react";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <ImageLinkForm />
      {/*<Logo />
      <ImageLinkForm />
      <FaceRecognition />*/}
    </div>
  );
}

export default App;
