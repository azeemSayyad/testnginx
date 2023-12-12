import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <div className="App">
        Hello This is the react app, build for testing the nginx push 2 :)
      </div>
    </BrowserRouter>
  );
}

export default App;
