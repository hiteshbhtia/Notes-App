import "./App.css";
import Signup from "./Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Notes from "./Notes";
import CreateNote from "./CreateNote";
import Editnote from "./Editnote";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/notes/:id" element={<Notes />}></Route>
          <Route path="/createnote/:id" element={<CreateNote />}></Route>
          <Route
            path="/editnote/:id/:t/:d/:c/:userid"
            element={<Editnote />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
