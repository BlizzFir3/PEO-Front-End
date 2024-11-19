import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Exercice from './components/views/Exercice';
import Flux from './components/views/Flux';
import Formulaire from './components/views/Formulaire';
import HookUseState from './components/views/HookUseSate';
import JsxTheorie from './components/Views/JsxTheorie';

function App() {
    return (
		<BrowserRouter>
			<NavBar/>
            <Routes>
                <Route path="/" element={<JsxTheorie />} />
                <Route
                    path="/hook-use-state"
                    element={<HookUseState/>}
				/>
				<Route path='/flux' element={<Flux/>} />
				<Route path='/formulaire' element={<Formulaire/>} />
				<Route path='/exercice' element={<Exercice/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;