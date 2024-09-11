import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Todoscreen from "./screen/Todoscreen";

import "react-toastify/dist/ReactToastify.css";
import Expense from "./expense/Expense";
import Home from "./components/Home";
import Contactform from "./components/Contactform";
import Resume from "./components/Resume";
import Project from "./components/Project";
import Projectcontent from "./components/Projectcontent";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import { useContext } from "react";

function App() {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/project" element={<Projectcontent />} />
          <Route path="/contact" element={<Contactform />} />
          <Route path="/resume" element={<Resume />} />

          <Route path="todoScreen" element={<Todoscreen />} />

          <Route path="expense" element={<Expense title="hello" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
