import {createRoot} from 'react-dom/client';
import App from './App.jsx';

const rootId = document.getElementById('root');
const root = createRoot(rootId);
root.render(<App />);
