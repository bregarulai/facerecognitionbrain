import React, { useState } from "react";
import "./App.css";
import Particles from "react-particles-js";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";
import Rank from "./components/rank/Rank";

function App() {
  const app = new Clarifai.App({
    apiKey: "YOUR_API_KEY",
  });

  const [input, setInput] = useState("");

  const onInputChange = (event) => {
    console.log(event.target.value);
  };

  const onButtonSubmit = () => {
    console.log("clicked");
    app.models
      .predict("{model_id}", ["https://samples.clarifai.com/puppy.jpeg"])
      .then(
        function (response) {
          // do something with response
        },
        function (err) {
          // there was an error
        }
      );
  };

  const particlesOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 900,
        },
      },
    },
  };
  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        onInputChange={onInputChange}
        onButtonSubmit={onButtonSubmit}
      />
      {/*<Logo />
      <ImageLinkForm />
      <FaceRecognition />*/}
    </div>
  );
}

export default App;
