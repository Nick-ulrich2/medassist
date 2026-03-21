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
import Example from "./Test/Test";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/login" element={<Login />} />
                <Route path="/page1" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
                <Route path="/page3" element={<Page3 />} />
                <Route path="/page4" element={<Page4 />} />
                <Route path="/page5" element={<Page5 />} />
                <Route path="/pagesecrete" element={<PageSecrete />} />
                <Route path="/page6" element={<Page6 />} />

            </Routes>
        </BrowserRouter>

    )
};

export default App;