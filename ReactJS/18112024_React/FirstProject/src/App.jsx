import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import CycleDeVie from './components/views/CycleDeVie';
import Exercice from './components/views/Exercice';
import ExerciceApi from './components/views/ExerciceApi';
import Flux from './components/views/Flux';
import Formulaire from './components/views/Formulaire';
import HookPersonnalise from './components/views/HookPersonnalise';
import HookUseState from './components/views/HookUseSate';
import JsxTheorie from './components/Views/JsxTheorie';
import RequeteAPI from './components/views/RequeteAPI';
import TicTacToe from './components/views/TicTacToe';
import UseEffect from './components/views/UseEffect';
import HookUseMemo from './components/views/HookUseMemo';

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
                <Route path="/cycle-de-vie" element={<CycleDeVie />} />
                <Route path="/api" element={<RequeteAPI />} />
                <Route path="/hook-perso" element={<HookPersonnalise />} />
                <Route path="/exercice-api" element={<ExerciceApi />} />
                <Route path="/hook-use-memo" element={<HookUseMemo />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
