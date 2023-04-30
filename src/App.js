import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Navbar";
import { Banner } from "./Banner";
import { Contact } from "./Contact";
import { Footer } from "./Fotter";
import { AudioFile } from "./context/sharedContext";
import { useEffect, useState } from "react";
import sound from "./assets/sounds/WelcomeAlert.mp3";

function App() {
  const [audioFile, setAudioFile] = useState(null);

  useEffect(() => {
    const data = new Audio(sound);
    setAudioFile(data);
  }, []);

  return (
    <div className="App">
      <AudioFile.Provider value={{ audioFile, setAudioFile }}>
        <NavBar />
        <Banner />
        <Contact />
        <Footer />
      </AudioFile.Provider>
    </div>
  );
}

export default App;
