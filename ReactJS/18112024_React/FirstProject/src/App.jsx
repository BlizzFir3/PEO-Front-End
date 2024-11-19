import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
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
            </Routes>
        </BrowserRouter>
    );
}

export default App;