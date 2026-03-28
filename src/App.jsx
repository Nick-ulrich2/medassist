import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "./components/ui/Button";
import Login from "./pages/Login";
import Page1 from "./pages/RegisterPages/Page1";
import Page2 from "./pages/RegisterPages/Page2";
import Page3 from "./pages/RegisterPages/Page3";
import Page4 from "./pages/RegisterPages/Page4";
import Page5 from "./pages/RegisterPages/Page5";
import Page6 from "./pages/RegisterPages/Page6";
import PageSecrete from "./pages/RegisterPages/PageSecrete";
import Navbar from "./components/Accueil/NavBar/Navbar";
import Main from "./components/Accueil/Main/Main";
import Dropdown from "./components/Accueil/Dropdown/Dropdown";
import Accueil from "./components/Accueil/Accueil";

function App() {
    return (
        <div>
            {/* <Login/> */}
            <button className="btn btn-neutral">Neutral</button>
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-accent">Accent</button>
            <button className="btn btn-info">Info</button>
            <button className="btn btn-success">Success</button>
            <button className="btn btn-warning">Warning</button>
            <button className="btn btn-error">Error</button>
        </div>
    )
};

export default App;