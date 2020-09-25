import React, { useState } from "react";
import "./App.css";
import Clarifai from "clarifai";
import Particles from "react-particles-js";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";
import Rank from "./components/rank/Rank";
import FaceRecognition from "./components/faceRecognition/FaceRecognition";

function App() {
  //"a403429f2ddf4b49b307e318f00e528b"
  const app = new Clarifai.App({
    apiKey: process.env.REACT_APP_API_KEY,
  });

  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onButtonSubmit = () => {
    setImageUrl(input);
    app.models.predict(Clarifai.FACE_DETECT_MODEL, [input]).then(
      function (response) {
        console.log(
          response.outputs[0].data.regions[0].region_info.bounding_box
        );
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
      <FaceRecognition imageUrl={imageUrl} />
      {/*<Logo />
      <ImageLinkForm />
      <FaceRecognition />*/}
    </div>
  );
}

export default App;
