import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<>Ma page d'accueil</>} />
                <Route
                    path="/test"
                    style={{ color: 'white' }}
                    element={<h1>page TEST</h1>}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;