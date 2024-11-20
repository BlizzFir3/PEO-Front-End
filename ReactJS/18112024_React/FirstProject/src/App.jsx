import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Exercice from './components/views/Exercice';
import Flux from './components/views/Flux';
import Formulaire from './components/views/Formulaire';
import HookUseState from './components/views/HookUseSate';
import JsxTheorie from './components/Views/JsxTheorie';
import TicTacToe from './components/views/TicTacToe';
import UseEffect from './components/views/UseEffect';

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<JsxTheorie />} />
                <Route path="/hook-use-state" element={<HookUseState />} />
                <Route path="/flux" element={<Flux />} />
                <Route path="/formulaire" element={<Formulaire />} />
                <Route path="/exercice" element={<Exercice />} />
                <Route path="/tic-tac-toe" element={<TicTacToe />} />
                <Route path="/use-effect" element={<UseEffect />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
