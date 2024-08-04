import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import "./components/EarthCanvas/EarthCanvas.css";
import "./components/LegoCanvas/LegoCanvas.css";
import "./components/SateliteCanvas/SateliteCanvas.css";
import "./components/NaveCanvas/NaveCanvas.css";
const App = React.lazy(() => import('./App'));





const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(<App />);



//<React.Suspense fallback={<div>Loading...</div>}>
//<HeaderSocials />
//</React.Suspense>
