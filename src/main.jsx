import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './App.jsx';
import Quran from './Quran.jsx';
import QuranSurah from './QuranSurah.jsx';
import Questions from './Questions.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/quran" element={<Quran />} />
            <Route path="/quran/:id" element={<QuranSurah />} />
        </Routes>
    </BrowserRouter>,
);
