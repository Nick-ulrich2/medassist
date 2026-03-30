import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Page1 from "./pages/RegisterPages/Page1";
import Page2 from "./pages/RegisterPages/Page2";
import Page3 from "./pages/RegisterPages/Page3";
import Page4 from "./pages/RegisterPages/Page4";
import Page5 from "./pages/RegisterPages/Page5";
import Page6 from "./pages/RegisterPages/Page6";
import Accueil from "./components/Accueil/Accueil";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/login" element={<Login />} />
                <Route path="/page1" element={<Page1/>}/>
                 <Route path="/page2" element={<Page2/>}/>

            </Routes>
        </BrowserRouter>

    )
};

export default App;