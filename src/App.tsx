import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components";
import HomePage from "./Pages/HomePage";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;