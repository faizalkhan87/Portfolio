import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Navbar";
import { Banner } from "./Banner";
import { Contact } from "./Contact";
import { Footer } from "./Fotter";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
