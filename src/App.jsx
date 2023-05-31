import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		
		</>
	);
}

export default App;
