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

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Page1" element={<Page1 />} />
                <Route path="/Page2" element={<Page2 />} />
                <Route path="/Page3" element={<Page3 />} />
                <Route path="/Page4" element={<Page4 />} />
                <Route path="/Page5" element={<Page5 />} />
                <Route path="/PageSecrete" element={<PageSecrete />} />
                <Route path="/Page6" element={<Page6 />} />
                {/* <Route path="/Page7" element={<Page7 />} /> */}
            </Routes>
        </BrowserRouter>
    )
};

export default App;